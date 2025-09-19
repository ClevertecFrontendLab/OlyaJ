import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLoginMutation } from "../../../../entities/auth/api/authApi";
import { LoginType } from "../../../../entities/auth/model/authTypes";
import { useState } from "react";
import { Box, Button, Checkbox, FormControl, FormErrorMessage, FormLabel, Input, Link, Text} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { ROUTES } from "@shared/model/routes";
import { buttonStyle } from "./loginForm.styles";


const loginSchema = z.object({
    login: z
        .string()
        .min(3, "Минимум 3 символа")
        .max(100, "Слишком длинный логин"),
    password: z
        .string()
        .min(6, "Минимум 6 символов")
        .max(200, "Слишком длинный пароль"),
    remember: z.boolean().optional(),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export function LoginForm() {
    const [serverError, setServerError] = useState<string | null>(null);
    const [login, { isLoading }] = useLoginMutation();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting},
    } = useForm<LoginFormValues>({
        resolver: zodResolver(loginSchema),
        mode: "onBlur",
        defaultValues: { login: "", password: "", remember: false },
    });

    const onSubmit = async (values: LoginFormValues) => {
    };


    return (
        <Box
            as="form"
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            width="330px"
        >
            <FormControl isInvalid={!!errors.login} mb={5}>
                <FormLabel htmlFor="login" mb="1">Логин или email</FormLabel>
                <Input
                    id="login"
                    placeholder="user@gmail.com"
                    focusBorderColor="#2DB100"
                    {...register("login", { required: "Введите логин" })}
                />
                <FormErrorMessage>{errors.login?.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.password} mb={2}>
                <FormLabel htmlFor="password" mb="1">Пароль</FormLabel>
                <Input
                    id="password"
                    type="password"
                    focusBorderColor="#2cb100"
                    placeholder="••••••••"
                    {...register("password", { required: "Введите пароль" })}
                />
                <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
            </FormControl>

            <Box mb={8}>
                <Checkbox {...register("remember")} colorScheme='green'> <Text color='gray.600'>Запомнить меня</Text></Checkbox>
            </Box>

            <Box>
                <Link as={RouterLink} to={ROUTES.FORGOT_PASSWORD}>
                    Забыли пароль?
                </Link>
            </Box>

            <Button
                type="submit"
                isLoading={isSubmitting}
                {...buttonStyle}
            >
                Войти
            </Button>
        </Box>
    );
}