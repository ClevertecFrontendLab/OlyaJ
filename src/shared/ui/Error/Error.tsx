import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    CloseButton,
    Box,
} from "@chakra-ui/react";
import { useState } from "react";
import {
    alertErrorStyle,
    closeButtonStyle,
    descritpionErrorStyle,
    errorBoxStyle,
    titleErrorStyle,
} from "./error.styles";

type ErrorToastProps = {
    title?: string;
    message?: string;
    onClose?: () => void;
};

export const Error = ({
    title = "Ошибка сервера",
    message = "Попробуйте немного позже",
    onClose,
}: ErrorToastProps) => {
    const [visible, setVisible] = useState(true);

    const handleClose = () => {
        setVisible(false); 
        onClose?.(); 
    };

    if (!visible) return null;

    return (
        <Box {...errorBoxStyle}>
            <Alert {...alertErrorStyle}>
                <AlertIcon color="white" />
                <Box flex="1">
                    <AlertTitle {...titleErrorStyle}>{title}</AlertTitle>
                    <AlertDescription {...descritpionErrorStyle}>{message}</AlertDescription>
                </Box>
                <CloseButton {...closeButtonStyle} onClick={handleClose} />
            </Alert>
        </Box>
    );
};
