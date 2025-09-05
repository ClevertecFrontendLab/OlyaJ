import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "./ui/AuthLayout";
import { Box, Text, Link } from "@chakra-ui/react";
import { ROUTES } from "@shared/model/routes";


function SignUpPage() {
    return (
        <AuthLayout
            title="Регистрация"
            form={<Box></Box>}
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


