import { Box, Text } from "@chakra-ui/react";
import { labelTextNutritionBoxStyle, nutritionSquareBoxStyle, nutritionalValueBoxStyle, unitTextNutritionStyle, valueTextNutritionStyle } from "./nutritionValue.styles";


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
                    {...nutritionSquareBoxStyle}
                >
                    <Text {...labelTextNutritionBoxStyle} >
                        {label}
                    </Text>
                    <Text {...valueTextNutritionStyle}>
                        {value}
                    </Text>
                    <Text {...unitTextNutritionStyle} >
                        {unit}
                    </Text>
                </Box>
            ))}
        </Box>
    );
};
