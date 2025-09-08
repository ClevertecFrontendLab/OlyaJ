import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "./ui/authLayout";
import { Text, Link } from "@chakra-ui/react";
import { ROUTES } from "@shared/model/routes";
import { SignUpForm } from "./ui/SignUpForm/signUpForm";


function SignUpPage() {
    return (
        <AuthLayout
            title="Регистрация"
            form={<SignUpForm/>}
            footerText={
                <Text>Уже есть аккаунт?{" "}
                    <Link
                        as={RouterLink}
                        to={ROUTES.AUTH}
                        color="#2DB100"
                    >
                        Войти
                    </Link>
                </Text>
            }
        />
    );
}

export const Component = SignUpPage;


