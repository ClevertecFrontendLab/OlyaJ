import {
    Box,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Heading,
    Text,
} from "@chakra-ui/react";

interface AuthLayoutProps {
    form: React.ReactNode;
    title: React.ReactNode;
    description: React.ReactNode;
    footerText: React.ReactNode;
}

export function AuthLayout({
    form,
    title,
    description,
    footerText,
}: AuthLayoutProps) {
    return (
        <Box as="main" flex="1" display="flex" flexDirection="column" pt="200px" alignItems="center">
            <Card w="full" maxW="400px">
                <CardHeader>
                    <Heading size="md">{title}</Heading>
                    <Text color="gray.500" fontSize="sm">
                        {description}
                    </Text>
                </CardHeader>

                <CardBody>{form}</CardBody>

                <CardFooter>
                    <Text fontSize="sm" color="gray.500">
                        {footerText}
                    </Text>
                </CardFooter>
            </Card>
        </Box>
    );
}
