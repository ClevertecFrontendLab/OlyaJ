import { Input, Switch } from '@chakra-ui/react';
import filter from '/filter.svg';
import { useViewport } from '~/utils/ViewportProvider';
import s from './SectionHeader.module.css';
import { useState } from 'react';
import { Filter } from '../Filter/Filter';
import { CustomSelect } from '../CustomSelect/CustomSelect';
import clsx from 'clsx';
import { SearchIcon } from '@chakra-ui/icons';

type SectionHeaderType = {
    title: string;
    description?: string;
    searchValue: string;
    setSearchValue: (value: string) => void;
};

export const INITIAL_ALLERGEN_OPTIONS = [
    { label: 'молочные продукты', value: 'молочные продукты' },
    { label: 'яйцо', value: 'яйцо' },
    { label: 'рыба', value: 'рыба' },
    { label: 'моллюски', value: 'моллюски' },
    { label: 'орехи', value: 'орехи' },
    { label: 'томат(помидор)', value: 'томат(помидор)' },
    { label: 'цитрусовые', value: 'цитрусовые' },
    { label: 'клубника(ягоды)', value: 'клубника(ягоды)' },
    { label: 'грибы', value: 'грибы' },
];

export const allRecipes = [
    { id: 1, title: 'Солянка с грибами' },
    { id: 2, title: 'Капустные котлеты' },
    { id: 3, title: 'Оладьи на кефире' },
];

export const SectionHeader = ({
    title,
    description,
    searchValue,
    setSearchValue,
}: SectionHeaderType) => {
    const { isDesktop } = useViewport();

    const [filterOpen, setFilterOpen] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const [isDisabled, setIsDisabled] = useState(true);
    const [isAllergenActive, setIsAllergenActive] = useState(false);
    const [recipes, setRecipes] = useState(allRecipes);

    const [selectedAllergens, setSelectedAllergens] = useState<string[]>([]);
    const [allergenOptions, setAllergenOptions] = useState(INITIAL_ALLERGEN_OPTIONS);

    const handleOpenFilter = () => setFilterOpen(true);
    const handleCloseFilter = () => setFilterOpen(false);

    const handleFocus = () => setIsActive(true);
    const handleBlur = () => setIsActive(false);

    const performSearch = (value: string) => {
        setSearchValue(value);
        setIsDisabled(value.length < 3);

        if (value.length >= 3) {
            const filtered = allRecipes.filter((recipe) =>
                recipe.title.toLowerCase().includes(value.toLowerCase()),
            );
            setRecipes(filtered);
        } else {
            setRecipes(allRecipes);
        }
    };

    const handleAllergenChange = (newAllergens: string[]) => {
        // Проверяем, есть ли новые аллергены которых нет в списке
        newAllergens.forEach((allergen) => {
            if (!allergenOptions.find((opt) => opt.value === allergen)) {
                setAllergenOptions((prev) => [...prev, { label: allergen, value: allergen }]);
            }
        });

        setSelectedAllergens(newAllergens);
        setIsActive(newAllergens.length > 0);
    };

    return (
        <div className={clsx(s.sectionHeader, isActive && s.active)}>
            <span className={s.title}>{title}</span>
            <p className={s.description}>{description}</p>

            <div className={s.filterInputWrapper}>
                <img
                    className={s.filterIcon}
                    src={filter}
                    alt='Filter Icon'
                    onClick={handleOpenFilter}
                    data-test-id='filter-button'
                />
                <Filter isOpen={filterOpen} onClose={handleCloseFilter} />

                <div className={s.inputWrapper}>
                    <Input
                        data-test-id='search-input'
                        className={s.input}
                        placeholder='Название или ингредиент...'
                        value={searchValue}
                        sx={{
                            _focus: {
                                borderColor: '#2DB100',
                                boxShadow: 'none',
                            },
                        }}
                        onChange={(e) => performSearch(e.currentTarget.value)}
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' && searchValue.length >= 3) {
                                performSearch(searchValue);
                            }
                        }}
                    />
                </div>

                <SearchIcon
                    data-test-id='search-button'
                    className={clsx(s.searchIcon, isDisabled && s.disabledIcon)}
                    boxSize={5}
                    color={isDisabled ? 'gray.400' : 'gray.700'}
                    cursor={isDisabled ? 'not-allowed' : 'pointer'}
                    onClick={() => {
                        if (!isDisabled) {
                            performSearch(searchValue);
                        }
                    }}
                />
            </div>

            {isDesktop && (
                <div className={s.selectWrapper}>
                    <div className={s.toggleWrapper}>
                        <span>Исключить мои аллергены</span>
                        <Switch
                            data-test-id='allergens-switcher'
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
                                setIsActive(e.currentTarget.checked);
                                setIsAllergenActive(e.currentTarget.checked);
                                setSelectedAllergens([]);
                            }}
                        />
                    </div>

                    <div>
                        <CustomSelect
                            dataTestId='allergens-menu-button'
                            placeholder='Выберите из списка аллергенов'
                            options={allergenOptions}
                            value={selectedAllergens}
                            onChange={handleAllergenChange}
                            width='234px'
                            isActive={isAllergenActive}
                            showCustomInput={true}
                            inputWidth='190px'
                            isDisabled={!isAllergenActive}
                            isAllergenList={true}
                            isAllergenHeader={true}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};
