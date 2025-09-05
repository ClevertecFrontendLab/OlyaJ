import {
    Box,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Heading,
    Text,
} from "@chakra-ui/react";
import { authLayoutCardStyle, footerTextStyle, headingCardTitleStyle } from "./authLayout.styles";


interface AuthLayoutProps {
    form: React.ReactNode;
    title: React.ReactNode;
    footerText: React.ReactNode;
}

export function AuthLayout({
    form,
    title,
    footerText,
}: AuthLayoutProps) {
    return (
        <Box as="main" >
            <Card {...authLayoutCardStyle}>
                <CardHeader>
                    <Heading {...headingCardTitleStyle}>{title}</Heading>
                </CardHeader>

                <CardBody>{form}</CardBody>

                <CardFooter>
                    <Text {...footerTextStyle}>
                        {footerText}
                    </Text>
                </CardFooter>
            </Card>
        </Box>
    );
}
