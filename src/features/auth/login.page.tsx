import { Link } from "react-router-dom";
import { AuthLayout } from "./ui/AuthLayout";
import { Box, Text} from "@chakra-ui/react";
import { ROUTES } from "@shared/model/routes";



function LoginPage(){
  return (
    <AuthLayout
        title = "Вход в систему"
        description = "Введите email и пароль"
        form = {<Box></Box>}
        footerText = {
          <Text>
          Нет аккаунта? <Link to={ROUTES.AUTH}/>
          </Text>
        }
    />
  )
}

export const Component = LoginPage;