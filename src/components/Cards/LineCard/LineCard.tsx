import { Button } from '@chakra-ui/react';

import s from './LineCard.module.css';
import { highlightMatch } from '~/utils/HighlightMatch';

export type LineCardType = {
    title: string;
    icon: string;
    searchValue?: string;
};

export const LineCard = ({ title, icon, searchValue }: LineCardType) => (
    <div className={s.container}>
        <div className={s.iconTitleWrapper}>
            <img src={icon} width='24' height='24' />
            <span className={s.title}>
                {searchValue ? highlightMatch(title, searchValue) : title}
            </span>
        </div>
        <Button
            width={{ base: '70px', md: '87px' }}
            height={{ base: '26px', md: '32px' }}
            fontSize={{ base: '12px', md: 'clamp(12px, 2vw, 14px)' }}
            borderRadius='6px'
            border='1px solid'
            borderColor='#2db100'
            color='#2db100'
            variant=''
        >
            Готовить
        </Button>
    </div>
);
