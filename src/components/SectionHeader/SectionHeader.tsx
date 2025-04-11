import { Input, Select, Switch } from '@chakra-ui/react';

import filter from '/filter.svg';
import search from '/search.svg';

import { useViewport } from '~/utils/ViewportProvider';

import s from './SectionHeader.module.css';

type SectionHeaderType = {
    title: string;
    description?: string;
};

export const SectionHeader = ({ title, description }: SectionHeaderType) => {
    const { isDesktop } = useViewport();

    return (
        <div className={s.sectionHeader}>
            <h1 className={s.title}>{title}</h1>
            <p className={s.description}>{description}</p>
            <div className={s.filterInputWrapper}>
                <img className={s.filterIcon} src={filter} alt='Filter Icon' />
                <div className={s.inputWrapper}>
                    <Input className={s.input} placeholder='Название или ингредиент...' />
                    <img src={search} alt='Search' className={s.searchIcon} />
                </div>
            </div>

            {isDesktop && (
                <div className={s.selectWrapper}>
                    <div className={s.toggleWrapper}>
                        <span>Исключить мои аллергены</span>
                        <Switch />
                    </div>
                    <div>
                        <Select
                            className={s.select}
                            placeholder='Выберите из списка'
                            sx={{ color: 'gray' }}
                        />
                    </div>
                </div>
            )}
        </div>
    );
};
