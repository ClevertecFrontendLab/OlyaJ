import {
    Box,
    Button,
    Checkbox,
    CheckboxGroup,
    Select,
    Stack,
    Switch,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Heading,
} from '@chakra-ui/react';

type FilterType = {
    isOpen: boolean;
    onClose: () => void;
};

export const Filter = ({ isOpen, onClose }: FilterType) => {
    return (
        <Drawer placement='left' onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Фильтры</DrawerHeader>

                <DrawerBody>
                    <Box p={4}>
                        <Select placeholder='Категория'>
                            <option value='category1'>Категория 1</option>
                            <option value='category2'>Категория 2</option>
                        </Select>

                        <Select placeholder='Поиск по автору' mt={4}>
                            <option value='author1'>Автор 1</option>
                            <option value='author2'>Автор 2</option>
                        </Select>

                        <CheckboxGroup>
                            <Heading as='h3' size='md' mb={4}>
                                Тип мяса
                            </Heading>
                            <Stack spacing={2} mt={4}>
                                <Checkbox value='chicken'>Курица</Checkbox>
                                <Checkbox value='pork'>Свинина</Checkbox>
                                <Checkbox value='beef'>Говядина</Checkbox>
                                <Checkbox value='turkey'>Индейка</Checkbox>
                                <Checkbox value='duck'>Утка</Checkbox>
                            </Stack>
                        </CheckboxGroup>

                        <Stack direction='row' align='center' spacing={4} mt={4}>
                            <Switch id='allergens' />
                            <Select placeholder='Выберите аллерген'>
                                <option value='nuts'>Орехи</option>
                                <option value='milk'>Молоко</option>
                            </Select>
                        </Stack>
                    </Box>
                </DrawerBody>

                <DrawerFooter>
                    <Stack spacing={4} width='100%'>
                        <Button colorScheme='red' onClick={() => console.log('Очистить фильтр')}>
                            Очистить фильтр
                        </Button>
                        <Button colorScheme='blue' onClick={() => console.log('Найти рецепт')}>
                            Найти рецепт
                        </Button>
                    </Stack>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    );
};
