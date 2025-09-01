import { apiSlice } from '../../../query/create-api';
import { AuthResponse, LoginType, ResetPasswordType, SignUpType, VerifyOtpType } from '../model/authTypes';

export const authApi = apiSlice.injectEndpoints({
   endpoints: (builder) => ({
      signUp: builder.mutation<AuthResponse, SignUpType>({
         query: (body) => ({
            url: '/auth/signup',
            method: 'POST',
            body,
         }),
      }),
      login: builder.mutation<AuthResponse, LoginType>({
         query: (body) => ({
            url: '/auth/login',
            method: 'POST',
            body,
         }),
      }),
      checkAuth: builder.query<AuthResponse, void>({
         query: () => ({
            url: '/auth/check-auth',
            method: 'GET',
         }),
      }),
      authVerify: builder.query<AuthResponse, { token: string }>({
         query: ({ token }) => ({
            url: `/auth/verify?token=${encodeURIComponent(token)}`,
            method: 'GET',
         }),
      }),
      authForgotPassword: builder.mutation<AuthResponse, { email: string }>({
         query: ({ email }) => ({
            url: '/auth/forgot-password',
            method: 'POST',
            body: { email: email.trim() },
         }),
      }),
      verifyOtp: builder.mutation<AuthResponse, VerifyOtpType>({
         query: (body) => ({
            url: '/auth/verify-otp',
            method: 'POST',
            body,
         }),
      }),
      resetPassword: builder.mutation<AuthResponse, ResetPasswordType>({
         query: (body)=> ({
            url: '/auth/reset-password', 
            method: 'POST', 
            body
         })
      })
   }),
});


export const {
   useSignUpMutation,
   useLoginMutation,
   useCheckAuthQuery,
   useAuthVerifyQuery,
   useAuthForgotPasswordMutation,
   useVerifyOtpMutation, 
   useResetPasswordMutation,
} = authApi;


