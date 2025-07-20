import {
    Checkbox,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    Box,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { checkboxStyle, menuButtonStyle, selectedWordStyle } from "./select.styles";

const allergenOptions = [
    "Молочные продукты",
    "Яйцо",
    "Рыба",
    "Моллюски",
    "Орехи",
    "Томат (помидор)",
    "Цитрусовые",
    "Клубника (ягоды)",
    "Шоколад",
];

type SelectProps = {
    placeholder: string
    isDisabled?:boolean
}

export function Select({ placeholder, isDisabled}: SelectProps) {
    const [selected, setSelected] = useState<string[]>([]);

    const toggleSelect = (item: string) => {
        setSelected((prev) =>
            prev.includes(item)
                ? prev.filter((i) => i !== item)
                : [...prev, item]
        );
    };

    return (
        <Menu closeOnSelect={false}>

            <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon />}
                {...menuButtonStyle}
                isDisabled={isDisabled}
            >
                <Box display="flex" flexWrap="wrap" gap="6px">
                    {selected.length > 0 ? (
                        selected.map((item) => (
                            <Box
                                key={item}
                                {...selectedWordStyle}
                            >
                                {item}
                            </Box>
                        ))
                    ) : (
                        <Box color="rgba(0,0,0,0.64)" fontSize="16px" fontWeight="400">
                            {placeholder}
                        </Box>
                    )}
                </Box>
            </MenuButton>

            <MenuList zIndex={100}>
                {allergenOptions.map((item, index) => (
                    <MenuItem
                        key={item}
                        onClick={(e) => e.stopPropagation()}
                        bg={index % 2 === 0 ? "white" : "gray.50"}
                        _hover={{ bg: "gray.100" }}
                    >
                        <Checkbox
                            isChecked={selected.includes(item)}
                            onChange={() => toggleSelect(item)}
                            sx={checkboxStyle}
                        >
                            {item}
                        </Checkbox>


                    </MenuItem>
                ))}

            </MenuList>
        </Menu>
    );
}
