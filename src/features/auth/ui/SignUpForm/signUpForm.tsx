import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Box, Button, FormControl, FormErrorMessage, FormLabel, Input, Text } from "@chakra-ui/react";
import { SignUpType } from "../../../../entities/auth/model/authTypes"; 
import { buttonStyle } from "../LoginForm /loginForm.styles";


const signUpSchema = z.object({
    email: z.string().email("Введите корректный email"),
    login: z.string().min(3, "Минимум 3 символа").max(100, "Слишком длинный логин"),
    firstName: z.string().min(1, "Обязательное поле").max(100, "Слишком длинное имя"),
    lastName: z.string().min(1, "Обязательное поле").max(100, "Слишком длинная фамилия"),
    password: z.string().min(6, "Минимум 6 символов").max(200, "Слишком длинный пароль"),
    passwordConfirm: z.string().min(6, "Минимум 6 символов"),
}).refine((data) => data.password === data.passwordConfirm, {
    message: "Пароли не совпадают",
    path: ["passwordConfirm"],
});

type SignUpFormValues = z.infer<typeof signUpSchema>;

export function SignUpForm() {
    const [serverError, setServerError] = useState<string | null>(null);
    // const [signUp, { isLoading }] = useSignUpMutation();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<SignUpFormValues>({
        resolver: zodResolver(signUpSchema),
        mode: "onBlur",
        defaultValues: {
            email: "",
            login: "",
            firstName: "",
            lastName: "",
            password: "",
            passwordConfirm: "",
        },
    });

    const onSubmit = async (values: SignUpFormValues) => {
        setServerError(null);

        const body: SignUpType = {
            email: values.email.trim(),
            login: values.login.trim(),
            password: values.password,
            firstName: values.firstName.trim(),
            lastName: values.lastName.trim(),
        };

        try {
            // const res = await signUp(body).unwrap();
            // console.info(res?.message || "Регистрация прошла успешно");
            console.info("Регистрация прошла успешно (заглушка)"); // удалите после подключения мутации
            reset();
        } catch (e: any) {
            const apiMsg =
                e?.data?.message ||
                e?.error ||
                (typeof e === "string" ? e : "Не удалось выполнить регистрацию");
            setServerError(apiMsg);
        }
    };

    return (
        <Box as="form" onSubmit={handleSubmit(onSubmit)} noValidate width="330px">
            {serverError && (
                <Text color="red.500" mb={3} fontSize="sm">
                    {serverError}
                </Text>
            )}

            <FormControl isInvalid={!!errors.email} mb={5}>
                <FormLabel htmlFor="email" mb="1">Email</FormLabel>
                <Input id="email" placeholder="user@gmail.com" focusBorderColor="#2DB100"
                    {...register("email", { required: "Введите email" })} />
                <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.login} mb={5}>
                <FormLabel htmlFor="login" mb="1">Логин</FormLabel>
                <Input id="login" placeholder="username" focusBorderColor="#2DB100"
                    {...register("login", { required: "Введите логин" })} />
                <FormErrorMessage>{errors.login?.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.firstName} mb={5}>
                <FormLabel htmlFor="firstName" mb="1">Имя</FormLabel>
                <Input id="firstName" placeholder="Иван" focusBorderColor="#2DB100"
                    {...register("firstName", { required: "Введите имя" })} />
                <FormErrorMessage>{errors.firstName?.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.lastName} mb={5}>
                <FormLabel htmlFor="lastName" mb="1">Фамилия</FormLabel>
                <Input id="lastName" placeholder="Иванов" focusBorderColor="#2DB100"
                    {...register("lastName", { required: "Введите фамилию" })} />
                <FormErrorMessage>{errors.lastName?.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.password} mb={5}>
                <FormLabel htmlFor="password" mb="1">Пароль</FormLabel>
                <Input id="password" type="password" placeholder="••••••••" focusBorderColor="#2DB100"
                    {...register("password", { required: "Введите пароль" })} />
                <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={!!errors.passwordConfirm} mb={6}>
                <FormLabel htmlFor="passwordConfirm" mb="1">Подтверждение пароля</FormLabel>
                <Input id="passwordConfirm" type="password" placeholder="••••••••" focusBorderColor="#2DB100"
                    {...register("passwordConfirm", { required: "Повторите пароль" })} />
                <FormErrorMessage>{errors.passwordConfirm?.message}</FormErrorMessage>
            </FormControl>

            <Button type="submit" isLoading={isSubmitting /* || isLoading */} {...buttonStyle}>
                Зарегистрироваться
            </Button>
        </Box>
    );
}
