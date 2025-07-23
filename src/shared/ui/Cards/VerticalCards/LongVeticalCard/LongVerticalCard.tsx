import { Box, Heading, Button } from "@chakra-ui/react"
import { buttonVerticalCardStyle, longVerticalCardStyle, titleVerticalCardStyle } from "./longVerticalCard.style"

type LongVerticalCardProps = {
    title: string
}

export const LongVerticalCard = ({title}: LongVerticalCardProps) => {
    return (
        <Box {...longVerticalCardStyle}>
            <Heading {...titleVerticalCardStyle}>{title}</Heading>
            <Button {...buttonVerticalCardStyle }>
                Готовить
            </Button>
        </Box>
    )
}