import { apiSlice } from '../../../query/create-api';
import { AuthResponse, SignUp } from '../model/authTypes';

export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        signUp: builder.mutation<AuthResponse, SignUp>({
            query: (body) => ({
                url: '/auth/signup',
                method: 'POST',
                body,
            }),
        }),
    }),
});

export const { useSignUpMutation } = authApi;
