import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "./ui/AuthLayout";
import { Box, Text, Link } from "@chakra-ui/react";
import { ROUTES } from "@shared/model/routes";



function LoginPage() {
  return (
    <AuthLayout
        title="Вход в систему"
        form={<Box></Box>}
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

