import { Box, Text } from "@chakra-ui/react";
import { nutritionalValueBoxStyle } from "./nutritionValue.styles";


type Props = {
    calories: number;
    protein: number;
    fats: number;
    carbohydrates: number;
};

export const NutritionValues = ({ calories, protein, fats, carbohydrates }: Props) => {
    const items = [
        { key: "calories", label: "калорийность", value: calories, unit: "ККАЛ" },
        { key: "protein", label: "белки", value: protein, unit: "ГРАММ" },
        { key: "fats", label: "жиры", value: fats, unit: "ГРАММ" },
        { key: "carbohydrates", label: "углеводы", value: carbohydrates, unit: "ГРАММ" },
    ];

    return (
        <Box {...nutritionalValueBoxStyle}>
            {items.map(({ key, label, value, unit }) => (
                <Box
                    key={key}
                    border="1px solid"
                    borderColor="gray.200"
                    rounded="xl"
                    py={4}
                    px={3}
                    textAlign="center"
                >
                    <Text fontSize="sm" color="gray.600" mb={2}>
                        {label}
                    </Text>
                    <Text fontSize="4xl" fontWeight="bold" color="green.600" lineHeight={1}>
                        {value}
                    </Text>
                    <Text fontSize="sm" color="gray.600" mt={2}>
                        {unit}
                    </Text>
                </Box>
            ))}
        </Box>
    );
};
