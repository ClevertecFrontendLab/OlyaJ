import { Checkbox, Heading, Stack, Box, Text } from '@chakra-ui/react';

type CustomCheckboxGroupProps = {
    title: string;
    options: { label: string; value: string }[];
    selected: string[];
    onChange: (selected: string[]) => void;
    dataTestId?: string;
};

export const CustomCheckboxGroup = ({
    title,
    options,
    selected,
    onChange,
}: CustomCheckboxGroupProps) => {
    const toggleCheckbox = (value: string) => {
        if (selected.includes(value)) {
            onChange(selected.filter((v) => v !== value));
        } else {
            onChange([...selected, value]);
        }
    };

    return (
        <>
            <Heading as='h3' size='md' mb={4} mt={6} fontSize={16} fontWeight={500}>
                {title}
            </Heading>
            <Stack spacing={2}>
                {options.map((item, index) => (
                    <Box key={index} display='flex' alignItems='center' gap='8px'>
                        <Checkbox
                            data-test-id={
                                item.label === 'картошка' ? `checkbox-${item.label}` : undefined
                            }
                            isChecked={selected.includes(item.value)}
                            onChange={() => toggleCheckbox(item.value)}
                            value={item.value}
                            iconColor='black'
                            borderColor='#D7FF94'
                            _hover={{ borderColor: '#D7FF94' }}
                            _focus={{ boxShadow: 'none', outline: 'none' }}
                            _focusVisible={{ boxShadow: 'none', outline: 'none' }}
                            sx={{
                                '& .chakra-checkbox__control[data-checked]': {
                                    background: '#B1FF2E',
                                    borderColor: '#D7FF94',
                                },
                            }}
                            isFocusable={false}
                        />
                        <Text>{item.label}</Text>
                    </Box>
                ))}
            </Stack>
        </>
    );
};
