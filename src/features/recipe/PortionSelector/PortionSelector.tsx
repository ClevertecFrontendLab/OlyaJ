import { HStack, Text, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper } from "@chakra-ui/react";
import { ingredientsTextStyle } from "../recipe.styles";
import { portionSelectorBoxStyle } from "./portionSelector.styles";


export const PortionSelector = () => {
    return (
        <HStack>
          <Text {...ingredientsTextStyle}>
            ПОРЦИЙ
          </Text>
          <NumberInput {...portionSelectorBoxStyle}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </HStack>
      );
}