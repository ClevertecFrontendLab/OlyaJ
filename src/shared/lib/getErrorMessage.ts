import { ApiError } from "src/entities/auth/model/authTypes";


export function getErrorMessage(err: unknown, fallback = "Попробуйте немного позже"): string {
    const e = err as ApiError | undefined;
    return (
        (e && "data" in (e as any) && (e as any).data?.message) ||
        (e && "error" in e && e.error) ||
        fallback
    );
}
