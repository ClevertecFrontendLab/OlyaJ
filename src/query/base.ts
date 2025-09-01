// query/base.ts
import {
    BaseQueryFn,
    FetchArgs,
    fetchBaseQuery,
    FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react';
import { Mutex } from 'async-mutex';

const ACCESS_TOKEN_KEY = 'access-token';

export const baseQueryWithAccessToken = fetchBaseQuery({
    baseUrl: '/api',
    credentials: 'include', // если refresh завязан на cookie — нужно
    prepareHeaders: (headers) => {
        const token = localStorage.getItem(ACCESS_TOKEN_KEY);
        if (token) headers.set('authorization', `Bearer ${token}`);
        return headers;
    },
});

const mutex = new Mutex();

export const baseQueryWithReauth: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError
> = async (args, api, extraOptions) => {
    await mutex.waitForUnlock();

    let result = await baseQueryWithAccessToken(args, api, extraOptions);

    const is401 =
        result.error?.status === 401 ||
        (result.error?.status === 'PARSING_ERROR' &&
            (result.error as any)?.originalStatus === 401);

    if (is401) {
        if (!mutex.isLocked()) {
            const release = await mutex.acquire();
            try {
                const refreshResult = await baseQueryWithAccessToken(
                    { url: '/auth/refresh', method: 'GET' },
                    api,
                    extraOptions
                );

                // токен лежит в заголовке Authentication-Access
                const newToken =
                    (refreshResult.meta as any)?.response?.headers.get('Authentication-Access') ?? '';

                if (newToken) {
                    localStorage.setItem(ACCESS_TOKEN_KEY, newToken);

                    // повторяем исходный запрос. prepareHeaders возьмёт новый токен сам
                    result = await baseQueryWithAccessToken(args, api, extraOptions);
                } else {
                    // на всякий случай — refresh не вернул заголовок
                    localStorage.removeItem(ACCESS_TOKEN_KEY);
                }
            } catch (e) {
                localStorage.removeItem(ACCESS_TOKEN_KEY);
            } finally {
                release();
            }
        } else {
            // если уже обновляем в другом месте — ждём и пробуем ещё раз
            await mutex.waitForUnlock();
            result = await baseQueryWithAccessToken(args, api, extraOptions);
        }
    }

    // Бонус: если сервер кладёт новый токен и в успешные ответы — тоже сохраняем
    const tokenFromHeader =
        (result.meta as any)?.response?.headers.get('Authentication-Access');
    if (tokenFromHeader) {
        localStorage.setItem(ACCESS_TOKEN_KEY, tokenFromHeader);
    }

    return result;
};
