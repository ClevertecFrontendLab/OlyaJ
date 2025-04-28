import {
    Button,
    Checkbox,
    Flex,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Text,
    Input,
    Tag,
    TagLabel,
    Box,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';

type Option = {
    label: string;
    value: string;
};

type CustomSelectProps = {
    placeholder: string;
    options: Option[];
    mt?: number;
    value: string[];
    onChange: (value: string[]) => void;
    width?: string | number;
    isActive?: boolean;
    showCustomInput?: boolean;
    inputWidth?: string | number;
    isDisabled?: boolean;
    dataTestId?: string;
    isAllergenList?: boolean;
    isAllergenFilter?: boolean;
    isAllergenHeader?: boolean;
};

export const CustomSelect = ({
    placeholder,
    options,
    mt = 0,
    value,
    dataTestId,
    isAllergenList,
    isAllergenFilter,
    isAllergenHeader,
    onChange,
    width,
    isActive,
    showCustomInput,
    inputWidth,
    isDisabled,
}: CustomSelectProps) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [search, setSearch] = useState('');

    const toggleOption = (val: string) => {
        if (value.includes(val)) {
            onChange(value.filter((v) => v !== val));
        } else {
            onChange([...value, val]);
        }
    };

    const filteredOptions = options.filter((opt) =>
        opt.label.toLowerCase().includes(search.toLowerCase()),
    );

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.currentTarget.value);
    };

    const addAllergen = () => {
        const trimmedValue = search.trim();
        if (trimmedValue !== '' && !value.includes(trimmedValue)) {
            toggleOption(trimmedValue);
        }
        setSearch('');
    };

    const onKeyDownClick = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            addAllergen();
        }
    };

    const handleAddClick = () => {
        addAllergen();
    };

    return (
        <Menu isOpen={isOpen} onClose={onClose} closeOnSelect={false}>
            <MenuButton
                data-test-id={dataTestId}
                as={Button}
                onClick={onOpen}
                isDisabled={isDisabled}
                width={width || { base: '300px', md: '300px', lg: '399px' }}
                textAlign='left'
                fontWeight={400}
                variant='outline'
                whiteSpace='normal'
                height='auto'
                zIndex='100'
                py={2}
                bg='#FFFFF'
                borderColor={isActive ? '#2DB100' : '#E2E8F0'}
                _hover={{ borderColor: isActive ? '#2DB100' : '#D7FF94' }}
                _active={{ borderColor: isActive ? '#2DB100' : '#D7FF94' }}
                mt={mt}
                rightIcon={
                    <ChevronDownIcon
                        style={{
                            transition: 'transform 0.2s ease',
                            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        }}
                    />
                }
            >
                <Box>
                    <Flex align='center' gap={1} flexWrap='wrap'>
                        {value?.length > 0 ? (
                            <>
                                {value.map((val) => {
                                    const label =
                                        options.find((o) => o.value === val)?.label || val;
                                    return (
                                        <Tag
                                            key={val}
                                            size='sm'
                                            borderRadius='full'
                                            background='transparent'
                                            border='1.5px solid #D7FF94'
                                            color='#2DB100'
                                        >
                                            <TagLabel>{label}</TagLabel>
                                        </Tag>
                                    );
                                })}
                            </>
                        ) : (
                            <Text color='gray.500' isTruncated>
                                {placeholder}
                            </Text>
                        )}
                    </Flex>
                </Box>
            </MenuButton>

            <MenuList
                data-test-id='allergens-menu'
                width={width || { base: '300px', md: '300px', lg: '399px' }}
                p={0}
                zIndex={10}
            >
                {filteredOptions.map((option, i) => (
                    <MenuItem
                        key={option.value}
                        _hover={{ bg: 'gray.100' }}
                        bg={i % 2 === 0 ? 'white' : 'gray.50'}
                        px={4}
                        py={2}
                    >
                        <Flex align='center' gap={3}>
                            <Checkbox
                                data-test-id={
                                    isAllergenList
                                        ? `allergen-${i}`
                                        : option.label === 'веганская кухня'
                                          ? 'checkbox-веганская кухня'
                                          : undefined
                                }
                                isChecked={value?.includes(option.value)}
                                onChange={() => toggleOption(option.value)}
                                iconColor='black'
                                borderColor='#D7FF94'
                                sx={{
                                    '& .chakra-checkbox__control[data-checked]': {
                                        background: '#B1FF2E',
                                        borderColor: '#D7FF94',
                                        _hover: {
                                            background: '#B1FF2E',
                                            borderColor: '#D7FF94',
                                        },
                                    },
                                }}
                            />
                            <Text>{option.label}</Text>
                        </Flex>
                    </MenuItem>
                ))}

                {isOpen && showCustomInput && (
                    <Box
                        borderTop='1px solid #E2E8F0'
                        p={2}
                        bg='white'
                        display='flex'
                        flexDirection='row'
                        justifyContent='space-between'
                    >
                        <Input
                            data-test-id={
                                isAllergenFilter || isAllergenHeader
                                    ? 'add-other-allergen'
                                    : undefined
                            }
                            placeholder='Другие аллергены...'
                            size='sm'
                            value={search}
                            onChange={handleInputChange}
                            onKeyDown={onKeyDownClick}
                            _hover={{ borderColor: '#D7FF94' }}
                            _active={{ borderColor: '#D7FF94' }}
                            variant='outline'
                            borderColor='#E2E8F0'
                            focusBorderColor='transparent'
                            width={inputWidth}
                        />
                        <img
                            src='/addIcon.svg'
                            onClick={handleAddClick}
                            data-test-id={
                                isAllergenFilter || isAllergenHeader
                                    ? 'add-allergen-button'
                                    : undefined
                            }
                        />
                    </Box>
                )}
            </MenuList>
        </Menu>
    );
};
