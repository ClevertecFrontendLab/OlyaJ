import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    Box, Button, FormControl, FormErrorMessage, FormLabel, Input,
} from "@chakra-ui/react";
import { useSignUpMutation } from "../../../../entities/auth/api/authApi";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@shared/model/routes";
import { Error } from "@shared/ui/Error/Error";
import { getErrorMessage } from "./../../../../shared/lib/getErrorMessage";
import { buttonStyle } from "../LoginForm /loginForm.styles";



const signUpSchema = z.object({
    email: z.string().email("Введите корректный email"),
    login: z.string().min(3, "Минимум 3 символа").max(100, "Слишком длинный логин"),
    firstName: z.string().min(1, "Обязательное поле").max(100, "Слишком длинное имя"),
    lastName: z.string().min(1, "Обязательное поле").max(100, "Слишком длинная фамилия"),
    password: z.string().min(6, "Минимум 6 символов").max(200, "Слишком длинный пароль"),
});

type SignUpFormValues = z.infer<typeof signUpSchema>; 

export function SignUpForm() {
    const [signUp, { isLoading }] = useSignUpMutation();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
        clearErrors,
    } = useForm<SignUpFormValues>({
        resolver: zodResolver(signUpSchema),
        mode: "onBlur",
        defaultValues: {
            email: "",
            login: "",
            firstName: "",
            lastName: "",
            password: "",
        },
    });

    
    const onSubmit: SubmitHandler<SignUpFormValues> = async (values) => {
        clearErrors("root");
        try {
            await signUp(values).unwrap();
            navigate(ROUTES.MAIN);
        } catch (err) {
            setError("root", {
                type: "server",
                message: getErrorMessage(err, "Попробуйте немного позже"),
            });
        }
    };

    return (
        <Box as="form" onSubmit={handleSubmit(onSubmit)} noValidate width="330px">
            {errors.root?.message && (
                <Error
                    message={errors.root.message}
                    onClose={() => clearErrors("root")}
                />
            )}

            <FormControl isInvalid={!!errors.email} mb={5}>
                <FormLabel htmlFor="email" mb="1">Email</FormLabel>
                <Input
                    id="email"
                    placeholder="user@gmail.com"
                    focusBorderColor="#2DB100"
                    {...register("email", { required: "Введите email" })}
                />
                <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.login} mb={5}>
                <FormLabel htmlFor="login" mb="1">Логин</FormLabel>
                <Input
                    id="login"
                    placeholder="username"
                    focusBorderColor="#2DB100"
                    {...register("login", { required: "Введите логин" })}
                />
                <FormErrorMessage>{errors.login?.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.firstName} mb={5}>
                <FormLabel htmlFor="firstName" mb="1">Имя</FormLabel>
                <Input
                    id="firstName"
                    placeholder="Иван"
                    focusBorderColor="#2DB100"
                    {...register("firstName", { required: "Введите имя" })}
                />
                <FormErrorMessage>{errors.firstName?.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.lastName} mb={5}>
                <FormLabel htmlFor="lastName" mb="1">Фамилия</FormLabel>
                <Input
                    id="lastName"
                    placeholder="Иванов"
                    focusBorderColor="#2DB100"
                    {...register("lastName", { required: "Введите фамилию" })}
                />
                <FormErrorMessage>{errors.lastName?.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.password} mb={6}>
                <FormLabel htmlFor="password" mb="1">Пароль</FormLabel>
                <Input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    focusBorderColor="#2DB100"
                    {...register("password", { required: "Введите пароль" })}
                />
                <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
            </FormControl>

            <Button
                type="submit"
                isLoading={isLoading}
                isDisabled={isLoading}
                {...buttonStyle}
            >
                Зарегистрироваться
            </Button>
        </Box>
    );
}
