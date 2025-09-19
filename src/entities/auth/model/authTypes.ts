export type SignUpType = {
    email: string;
    login: string;
    password: string;
    firstName: string;
    lastName: string;
};


export type LoginType = {
    login: string; 
    password: string; 
}; 


export type VerifyOtpType = {
    email: string; 
    otpToken: string; 
}; 


export type ResetPasswordType = {
    email: string; 
    login: string; 
    password: string; 
    passwordConfirm: string; 
}; 


export type AuthResponse = {
    statusText: string;
    message: string;
};


export type ApiErrorBody = {
    message?: string;
    statusCode?: number;
    error?: string;      
};


export type ApiError =
    | { status: number; data?: ApiErrorBody } 
    | { error: string };                  
