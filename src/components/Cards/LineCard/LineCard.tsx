import { Button } from '@chakra-ui/react';

import s from './LineCard.module.css';

export type LineCardType = {
    title: string;
    icon: string;
};

export const LineCard = ({ title, icon }: LineCardType) => (
    <div className={s.container}>
        <div className={s.iconTitleWrapper}>
            <img src={icon} width='24' height='24' />
            <span className={s.title}>{title}</span>
        </div>
        <Button variant='' fontSize='12px' className={s.button}>
            Готовить
        </Button>
    </div>
);
