// PortionSelector/PortionSelector.tsx
import {
  HStack, Text, NumberInput, NumberInputField,
  NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper
} from "@chakra-ui/react";
import { ingredientsTextStyle } from "../recipe.styles";
import { portionSelectorBoxStyle } from "./portionSelector.styles";

type Props = {
  value: number;
  onChange: (val: number) => void;
};

export const PortionSelector = ({ value, onChange }: Props) => {
  return (
    <HStack>
      <Text {...ingredientsTextStyle}>ПОРЦИЙ</Text>
      <NumberInput
        {...portionSelectorBoxStyle}
        value={value}
        min={1}
        max={20}
        step={1}
        clampValueOnBlur
        onChange={(_, n) => onChange(Number.isFinite(n) ? n : 1)}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </HStack>
  );
};