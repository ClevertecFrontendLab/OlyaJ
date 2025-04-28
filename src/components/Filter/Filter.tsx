import {
    Button,
    Stack,
    Switch,
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Flex,
    Box,
    CloseButton,
} from '@chakra-ui/react';

import { CustomSelect } from '../CustomSelect/CustomSelect';
import { CustomCheckboxGroup } from '../CustomCheckboxGroup/CustomcheckboxGroup';
import { useState } from 'react';

import s from './Filter.module.css';
import { useNavigate } from 'react-router-dom';

type FilterType = {
    isOpen: boolean;
    onClose: () => void;
};

const categories = [
    { label: 'первые блюда', value: 'первые блюда' },
    { label: 'вторые блюда', value: 'вторые блюда' },
    { label: 'веганская кухня', value: 'веганская кухня' },
    { label: 'закуски', value: 'закуски' },
    { label: 'детские блюда', value: 'детские блюда' },
    { label: 'десерты, выпечка', value: 'десерты, выпечка' },
    { label: 'лечебное питание', value: 'лечебное питание' },
    { label: 'соусы', value: 'соусы' },
    { label: 'напитки', value: 'напитки' },
    { label: 'щаготовки', value: 'заготовки' },
];

const authors = [
    { label: 'Eлена Мин', value: 'Eлена Мин' },
    { label: 'Мирием Чонишвили', value: 'Мирием Чонишвили' },
    { label: 'Елена Прекрасная', value: 'Елена Прекрасная' },
    { label: 'Alex Cook', value: 'Alex Cook' },
    { label: 'Екатерина Константинопольская', value: 'Екатерина Константинопольская' },
    { label: 'Инна Высоцкая', value: 'Инна Высоцкая' },
    { label: 'Сергей Разумов', value: 'Сергей Разумов' },
    { label: 'Анна Рогачева', value: 'Анна Рогачева' },
    { label: 'Иван Орлов', value: 'Иван Орлов' },
    { label: 'Повар Ши', value: 'Повар Ши' },
    { label: 'Только новые авторы', value: 'Только новые авторы' },
];

const meat = [
    { label: 'курица', value: 'курица' },
    { label: 'свинина', value: 'свинина' },
    { label: 'говядина', value: 'говядина' },
    { label: 'индейка', value: 'индейка' },
    { label: 'утка', value: 'утка' },
];

const garnish = [
    { label: 'картошка', value: 'Картошка' },
    { label: 'гречка', value: 'гречка' },
    { label: 'паста', value: 'паста' },
    { label: 'спагетти', value: 'спагетти' },
    { label: 'рис', value: 'рис' },
    { label: 'капуста', value: 'капуста' },
    { label: 'фасоль', value: 'фасоль' },
    { label: 'другие овощи', value: 'другие овощи' },
];

export const allergens = [
    { label: 'молочные продукты', value: 'молочные продукты' },
    { label: 'яйцо', value: 'яйцо' },
    { label: 'рыба', value: 'рыба' },
    { label: 'моллюски', value: 'моллюски' },
    { label: 'орехи', value: 'орехи' },
    { label: 'томат(помидор)', value: 'томат(помидор)' },
    { label: 'цитрусовые', value: 'цитрусовые' },
    { label: 'клубника(ягоды)', value: 'клубника(ягоды)' },
    { label: 'грибы', value: 'грибы' },
    { label: 'лук', value: 'лук' },
];

export const Filter = ({ isOpen, onClose }: FilterType) => {
    const [selectedMeat, setSelectedMeat] = useState<string[]>([]);
    const [selectedGarnish, setSelectedGarnish] = useState<string[]>([]);
    const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
    const [selectedAuthor, setSelectedAuthor] = useState<string[]>([]);
    const [selectedAllergen, setSelectedAllergen] = useState<string[]>([]);
    const [isActive, setIsActive] = useState(false);
    const [isAllergenActive, setIsAllergenActive] = useState(false);
    const navigate = useNavigate();

    const selectedItems = [
        ...selectedMeat,
        ...selectedGarnish,
        ...selectedCategory,
        ...selectedAuthor,
        ...selectedAllergen,
    ];

    const handleClick = (value: string) => {
        if (selectedMeat.includes(value)) {
            setSelectedMeat((prev) => prev.filter((v) => v !== value));
        } else if (selectedGarnish.includes(value)) {
            setSelectedGarnish((prev) => prev.filter((v) => v !== value));
        } else if (selectedCategory.includes(value)) {
            setSelectedCategory((prev) => prev.filter((v) => v !== value));
        } else if (selectedAuthor.includes(value)) {
            setSelectedAuthor((prev) => prev.filter((v) => v !== value));
        } else if (selectedAllergen.includes(value)) {
            setSelectedAllergen((prev) => prev.filter((v) => v !== value));
        }
    };

    const handleClose = () => {
        setSelectedMeat([]);
        setSelectedGarnish([]);
        setSelectedCategory([]);
        setSelectedAuthor([]);
        setSelectedAllergen([]);
    };

    const handleFindRecipes = () => {
        if (selectedCategory.includes('веганская кухня')) {
            navigate('/vegan/second-dish', {
                state: { selectedGarnish, selectedAllergens: selectedAllergen },
            });
        }
    };

    return (
        <Drawer placement='right' onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent
                maxW={{ base: '344px', md: '344px', lg: '463px' }}
                height={{ base: '964px', md: '946px', lg: '1056' }}
                py={{ base: '16px', lg: '20px' }}
                pr={{ base: '16px', lg: '32px' }}
                pl={{ base: '20px', lg: '32px' }}
                data-test-id='filter-drawer'
            >
                <DrawerCloseButton
                    boxSize='24px'
                    bg='black'
                    borderRadius='full'
                    color='white'
                    top={{ base: '32px', md: '32px', lg: '38px' }}
                    right={{ base: '16px', md: '20px', lg: '32px' }}
                    outline='none'
                    boxShadow='none'
                    _focus={{ boxShadow: 'none' }}
                    data-test-id='close-filter-drawer'
                />

                <DrawerHeader px='0' className={s.title}>
                    Фильтр
                </DrawerHeader>
                <DrawerBody px='0'>
                    <Box maxHeight='calc(100vh - 120px)' overflowY='auto' pr='4'>
                        <CustomSelect
                            placeholder='Категория'
                            options={categories}
                            value={selectedCategory}
                            onChange={setSelectedCategory}
                            showCustomInput={false}
                            dataTestId='filter-menu-button-категория'
                        />

                        <CustomSelect
                            placeholder='Поиск по автору'
                            options={authors}
                            mt={4}
                            value={selectedAuthor}
                            onChange={setSelectedAuthor}
                            showCustomInput={false}
                        />

                        <CustomCheckboxGroup
                            title='Тип мяса:'
                            options={meat}
                            selected={selectedMeat}
                            onChange={setSelectedMeat}
                        />
                        <CustomCheckboxGroup
                            title='Тип гарнира:'
                            options={garnish}
                            selected={selectedGarnish}
                            onChange={setSelectedGarnish}
                            data-test-id={'картошка' ? 'checkbox-картошка' : undefined}
                        />

                        <Stack direction='column' align='flex-start' spacing={4} mt={6}>
                            <Flex align='center' gap={3}>
                                <span className={s.allergyText}>Исключить аллергены</span>
                                <Switch
                                    data-test-id='allergens-switcher-filter'
                                    id='allergens'
                                    colorScheme='green'
                                    sx={{
                                        '.chakra-switch__track': {
                                            bg: 'var(--blackAlpha-300, rgba(0, 0, 0, 0.16))',
                                            _checked: {
                                                bg: '#B1FF2E',
                                            },
                                        },
                                    }}
                                    onChange={(e) => {
                                        setIsActive(e.currentTarget.checked),
                                            setSelectedAllergen([]);
                                    }}
                                />
                            </Flex>
                            <CustomSelect
                                dataTestId='allergens-menu-button-filter'
                                placeholder='Выберите из списка аллергенов'
                                options={allergens}
                                value={selectedAllergen}
                                onChange={setSelectedAllergen}
                                showCustomInput={true}
                                isActive={isAllergenActive}
                                isAllergenList={true}
                                isAllergenFilter={true}
                            />
                        </Stack>
                    </Box>
                </DrawerBody>

                <Stack direction='row' wrap='wrap' spacing={2} mt={6} mb={4}>
                    {selectedItems?.map((item, index) => (
                        <Box
                            key={index}
                            display='flex'
                            px='6px'
                            py='2px'
                            bg='#EAFFC7'
                            borderRadius='6px'
                            color='#333'
                            fontSize='14px'
                            border='1px solid #D7FF94'
                            data-test-id='filter-tag'
                        >
                            {item}{' '}
                            <CloseButton size='sm' ml={1} onClick={() => handleClick(item)} />
                        </Box>
                    ))}
                </Stack>

                <Flex justifyContent='flex-end' mt={4} gap={2}>
                    <Button
                        variant='outline'
                        borderColor='#000'
                        color='#000'
                        width={{ base: '146px', md: '146px', lg: '205px' }}
                        height={{ base: '32px', md: '32px', lg: '48px' }}
                        fontSize={{ base: '14px', lg: '16px' }}
                        fontWeight='400'
                        onClick={handleClose}
                        data-test-id='clear-filter-button'
                    >
                        Очистить фильтр
                    </Button>

                    <Button
                        backgroundColor='#000'
                        color='#fff'
                        width={{ base: '121px', md: '121px', lg: '172px' }}
                        height={{ base: '32px', md: '32px', lg: '48px' }}
                        fontSize={{ base: '14px', lg: '16px' }}
                        fontWeight='400'
                        _hover={{ bg: '#333' }}
                        isDisabled={selectedItems.length === 0}
                        pointerEvents={selectedItems.length === 0 ? 'none' : 'auto'}
                        data-test-id='find-recipe-button'
                        onClick={handleFindRecipes}
                    >
                        Найти рецепт
                    </Button>
                </Flex>
            </DrawerContent>
        </Drawer>
    );
};
