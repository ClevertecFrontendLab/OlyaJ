import { Link as RouterLink } from "react-router-dom";
import { Text, Link } from "@chakra-ui/react";
import { ROUTES } from "@shared/model/routes";
import { LoginForm } from "./ui/LoginForm /loginForm";
import { AuthLayout } from "./ui/authLayout";



function LoginPage() {
  return (
    <AuthLayout
        title="Вход в систему"
        form={<LoginForm/>}
        footerText={
            <Text>Нет аккаунта?{" "}
            <Link
                as={RouterLink}
                to={ROUTES.SIGNUP}
                color="#2DB100"
            >
                Зарегистрироваться
          </Link>
        </Text>
      }
    />
  );
}

export const Component = LoginPage;

