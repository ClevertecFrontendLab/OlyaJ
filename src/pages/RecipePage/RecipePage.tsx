import { Box, Button, Container, Image, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useBreadcrumb } from '~/utils/BreadcrumbsContext';
import {
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
} from '@chakra-ui/react';
import { RecipeStepCard } from '~/components/Cards/RecipeStepCard/RecipeStepCard';
import { RecipeAuthorCard } from '~/components/Cards/RecipeAuthorCard/RecipeAuthorCard';
import { NewRecipes } from '~/pages/Main/NewRecipes/NewRecipes';
import { allRecipes, mostJuicyRecipes, veganRecipes, veganSnacks } from '~/data/recipes';
import { getTitlesBySlugs } from '~/utils/GetTitlesBySlugs';

const CATEGORY_TRANSLATIONS: Record<string, string> = {
    vegan: 'Веганская кухня',
    'second-dish': 'Вторые блюда',
    national: 'Национальная кухня',
    snacks: 'Закуски',
    'warm-snacks': 'Тёплые закуски',
    vegetables: 'Овощи',
    'poultry-dish': 'Блюда из птицы',
    'side-dishes': 'Гарниры',
};

export const RecipePage = () => {
    const { category, subcategory, id } = useParams();
    const { setBreadcrumbs } = useBreadcrumb();
    const [value, setValue] = useState(4);
    const [searchValue, setSearchValue] = useState('');

    let recipe;

    if (category === 'vegan') {
        if (subcategory === 'snacks') {
            recipe = veganSnacks.find((r) => r.id === id);
        } else {
            recipe = veganRecipes.find((r) => r.id === id);
        }
    } else if (category === 'the-juiciest') {
        recipe = mostJuicyRecipes.find((r) => r.id === id);
    } else {
        recipe = allRecipes.find((r) => r.id === id);
    }

    useEffect(() => {
        const { categoryTitle, subcategoryTitle } = getTitlesBySlugs(category, subcategory);

        if (recipe) {
            setBreadcrumbs({
                accordion: categoryTitle,
                subItem: subcategoryTitle,
                title: recipe.title,
            });
        } else {
            setBreadcrumbs({
                accordion: categoryTitle,
                subItem: subcategoryTitle,
                title: null,
            });
        }
    }, [recipe, category, subcategory]);

    if (!recipe) {
        return (
            <Text fontSize='24px' mt='40px'>
                Рецепт не найден 😔
            </Text>
        );
    }

    const basePortions = recipe.portions || 1;

    const formatAmount = (amount: number, unit: string) => {
        const formatted = Number.isInteger(amount) ? amount : amount.toFixed(1);
        const pluralRules = new Intl.PluralRules('ru-RU');
        const form = pluralRules.select(amount);
        const units = {
            пучок: { one: 'пучок', few: 'пучка', many: 'пучков' },
            зубчик: { one: 'зубчик', few: 'зубчика', many: 'зубчиков' },
            щепотка: { one: 'щепотка', few: 'щепотки', many: 'щепоток' },
            'ст л': { one: 'ст. л', few: 'ст. л', many: 'ст. л' },
            г: { one: 'г', few: 'г', many: 'г' },
            мл: { one: 'мл', few: 'мл', many: 'мл' },
            шт: { one: 'шт', few: 'шт', many: 'шт' },
        };
        const unitForms = units[unit] || { one: unit, few: unit, many: unit };
        return `${formatted} ${unitForms[form] || unit}`;
    };

    return (
        <Box>
            <Container
                maxW={['360px', '748px', '1360px']}
                display='flex'
                justifyContent='center'
                alignItems='center'
                flexDirection='column'
                mt={{ base: '16px', md: '20px', xl: '40px' }}
            >
                <Box
                    display='flex'
                    flexDirection={{ base: 'column', md: 'row' }}
                    gap={{ base: '16px', md: '16px', xl: '24px' }}
                >
                    <Image
                        src={recipe.image}
                        width={{ base: '360px', md: '224px', xl: '553px' }}
                        height={{ base: '224px', md: '232px', xl: '410px' }}
                    />

                    <Box
                        display='flex'
                        flexDirection='column'
                        justifyContent='space-between'
                        gap='24px'
                    >
                        <Box width='100%' display='flex' flexDirection='column' gap='32px'>
                            {/* Категория */}
                            <Box
                                display='flex'
                                flexDirection='row'
                                width='100%'
                                justifyContent='space-between'
                                alignItems='flex-start'
                            >
                                <Box display='flex' flexWrap='wrap' gap='8px' flex='1'>
                                    {recipe.category.map((cat, index) => (
                                        <Box
                                            key={index}
                                            display='flex'
                                            alignItems='center'
                                            bg='#FFFFD3'
                                            px='4px'
                                            borderRadius='4px'
                                        >
                                            {/* Иконка категории можно добавить сюда если нужно */}
                                            <Text fontSize='sm' color='gray.700' ml='4px'>
                                                {CATEGORY_TRANSLATIONS[cat] || cat}
                                            </Text>
                                        </Box>
                                    ))}
                                </Box>

                                {/* Иконки */}
                                <Box
                                    display='flex'
                                    flexDirection='row'
                                    gap={{ base: '10px', md: '10px', xl: '24px' }}
                                >
                                    <Box
                                        display='flex'
                                        alignItems='center'
                                        flexDirection='row'
                                        gap='2px'
                                    >
                                        <Image src='/bookmarkHeart.svg' boxSize='16px' />
                                        <Text>{recipe.bookmarks}</Text>
                                    </Box>
                                    <Box
                                        display='flex'
                                        alignItems='center'
                                        flexDirection='row'
                                        gap='2px'
                                    >
                                        <Image src='/heartEyes.svg' boxSize='16px' />
                                        <Text>{recipe.likes}</Text>
                                    </Box>
                                </Box>
                            </Box>

                            {/* Заголовок и описание */}
                            <Box
                                display='flex'
                                flexDirection='column'
                                gap={{ base: '16px', md: '16px', xl: '24px' }}
                            >
                                <Text
                                    fontSize={{ base: '24px', md: '24px', xl: '48px' }}
                                    fontWeight='800'
                                    lineHeight={{ base: '32px', md: '32px', xl: '48px' }}
                                >
                                    {recipe.title}
                                </Text>
                                <Text fontSize='14px' fontWeight='400' lineHeight='20px'>
                                    {recipe.description}
                                </Text>
                            </Box>
                        </Box>

                        {/* Время приготовления и кнопки */}
                        <Box
                            display='flex'
                            flexDirection={{ base: 'column', md: 'row' }}
                            justifyContent='space-between'
                            gap='12px'
                            alignItems='flex-end'
                        >
                            <Box
                                display='flex'
                                justifyContent='space-between'
                                alignItems='center'
                                bg='rgba(0, 0, 0, 0.06)'
                                px='6px'
                                borderRadius='4px'
                                width='104px'
                                height='24px'
                            >
                                <Text fontSize='sm' color='gray.700'>
                                    {recipe.time}
                                </Text>
                                <Image src={'/clockIcon.svg'} />
                            </Box>

                            <Box
                                display='flex'
                                flexDirection='row'
                                gap={{ base: '12px', md: '16px' }}
                            >
                                <Button
                                    variant='outline'
                                    border='1px solid'
                                    borderColor='rgba(0, 0, 0, 0.48)'
                                    borderRadius='6px'
                                    width={{ base: '132px', md: '132px', xl: '209px' }}
                                    height={{ base: '24px', md: '24px', xl: '48px' }}
                                >
                                    <Image
                                        src='/heartEyes.svg'
                                        boxSize={{ base: '12px', md: '12px', xl: '16px' }}
                                    />
                                    <Text
                                        fontSize={{ base: '12px', md: '12px', xl: '18px' }}
                                        ml='4px'
                                    >
                                        Оценить рецепт
                                    </Text>
                                </Button>

                                <Button
                                    bg='#B1FF2E'
                                    borderRadius='6px'
                                    width={{ base: '168px', md: '168px', xl: '273px' }}
                                    height={{ base: '24px', md: '24px', xl: '48px' }}
                                >
                                    <Image
                                        src='/bookmarkHeart.svg'
                                        boxSize={{ base: '12px', md: '12px', xl: '16px' }}
                                    />
                                    <Text
                                        fontSize={{ base: '12px', md: '12px', xl: '18px' }}
                                        color='gray.700'
                                        ml='4px'
                                    >
                                        Сохранить в закладки
                                    </Text>
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>

                {/* Калорийность */}
                <Box
                    display='flex'
                    flexDirection='column'
                    alignItems='left'
                    gap={{ base: '12px', md: '12px', xl: '24px' }}
                    width={{ base: '328px', md: '728px', xl: '668px' }}
                    mt='40px'
                >
                    <Text
                        fontSize='14px'
                        lineHeight='20px'
                        fontWeight='400'
                        color='rgba(0, 0, 0, 0.80)'
                    >
                        *Калорийность на одну порцию
                    </Text>

                    <Box
                        display='flex'
                        flexDirection={{ base: 'column', md: 'row', xl: 'row' }}
                        gap={{ base: '12px', md: '12px', xl: '24px' }}
                    >
                        {[
                            {
                                label: 'Калорийность',
                                value: recipe.nutritionValue.calories,
                                unit: 'ККАЛ',
                            },
                            {
                                label: 'Белки',
                                value: recipe.nutritionValue.proteins,
                                unit: 'ГРАММ',
                            },
                            { label: 'Жиры', value: recipe.nutritionValue.fats, unit: 'ГРАММ' },
                            {
                                label: 'Углеводы',
                                value: recipe.nutritionValue.carbohydrates,
                                unit: 'ГРАММ',
                            },
                        ].map((item, index) => (
                            <Box
                                key={index}
                                display={{ base: 'grid', md: 'flex', xl: 'flex' }}
                                gridTemplateColumns={{ base: '1fr 120px 1fr' }}
                                flexDirection={{ md: 'column', xl: 'column' }}
                                justifyContent={{ md: 'center', xl: 'center' }}
                                alignItems='center'
                                justifyItems={{ base: 'center' }}
                                textAlign={{ base: 'left' }}
                                width={{ base: '328px', md: '173px', xl: '149px' }}
                                height={{ base: '64px', md: '136px', xl: '136px' }}
                                px='12px'
                                py={{ base: '8px', md: '0' }}
                                border='1px solid #E2E8F0'
                                borderRadius='12px'
                                bg='white'
                            >
                                <Text fontSize='14px' fontWeight='400' color='rgba(0, 0, 0, 0.48)'>
                                    {item.label}
                                </Text>
                                <Text fontSize='36px' fontWeight='500' color='#134B00'>
                                    {item.value}
                                </Text>
                                <Text fontSize='14px' fontWeight='600' color='rgba(0, 0, 0, 0.92)'>
                                    {item.unit}
                                </Text>
                            </Box>
                        ))}
                    </Box>
                </Box>

                {/* Ингредиенты и выбор порций */}
                <Box
                    display='flex'
                    flexDirection='row'
                    justifyContent='space-between'
                    alignItems='center'
                    width={{ base: '328px', md: '604px', xl: '668px' }}
                    mt='40px'
                >
                    <Text fontSize='12px' fontWeight='700' color='#2DB100'>
                        ИНГРЕДИЕНТЫ
                    </Text>
                    <Box display='flex' alignItems='center' gap='8px'>
                        <Text fontSize='12px' fontWeight='700' color='#2DB100'>
                            ПОРЦИЙ
                        </Text>
                        <NumberInput
                            size='sm'
                            maxW='60px'
                            min={1}
                            max={10}
                            value={value}
                            onChange={(val) => setValue(Number(val))}
                        >
                            <NumberInputField />
                            <NumberInputStepper>
                                <NumberIncrementStepper data-test-id='increment-stepper' />
                                <NumberDecrementStepper data-test-id='decrement-stepper' />
                            </NumberInputStepper>
                        </NumberInput>
                    </Box>
                </Box>

                {/* Список ингредиентов */}
                <Box display='flex' flexDirection='column' mt='8px'>
                    {recipe.ingredients.map((item, index) => (
                        <Box
                            key={index}
                            display='flex'
                            justifyContent='space-between'
                            alignItems='center'
                            width={{ base: '328px', md: '604px', xl: '668px' }}
                            height='40px'
                            bg={index % 2 === 0 ? 'rgba(0, 0, 0, 0.06)' : '#FFF'}
                            px='8px'
                            py='4px'
                        >
                            <Text fontSize='14px'>{item.title}</Text>
                            <Text
                                fontSize='14px'
                                fontWeight='500'
                                data-test-id={`ingredient-quantity-${index}`}
                            >
                                {formatAmount(
                                    (Number(item.count) / basePortions) * value,
                                    item.measureUnit,
                                )}
                            </Text>
                        </Box>
                    ))}
                </Box>

                {/* Шаги приготовления */}
                <Box
                    display='flex'
                    flexDirection='column'
                    gap='20px'
                    alignItems='start'
                    width={{ base: '328px', md: '604px', xl: '668px' }}
                    mt={{ base: '34px', md: '34px', xl: '40px' }}
                >
                    <Text fontSize={{ base: '24px', md: '24px', xl: '48px' }} fontWeight='500'>
                        Шаги приготовления
                    </Text>
                    {recipe.steps.map((step, index) => (
                        <RecipeStepCard
                            key={index}
                            step={`Шаг ${step.stepNumber}`}
                            description={step.description}
                            image={step.image}
                            withImage={!!step.image}
                        />
                    ))}
                </Box>

                {/* Автор рецепта */}
                <RecipeAuthorCard
                    avatar='/recipeAvatar.png'
                    name='Сергей Разумов'
                    email='@serge25'
                    isFollowing={125}
                />

                {/* Новые рецепты */}
                <NewRecipes searchValue={searchValue} />
            </Container>
        </Box>
    );
};
