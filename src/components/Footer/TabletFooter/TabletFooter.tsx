import { Button } from '@chakra-ui/react';

import s from './TabletFooter.module.css';

const icons = [
    { image: '/home.svg', title: 'Главная' },
    { image: '/search.svg', title: 'Поиск' },
    { image: '/pencil.svg', title: 'Записать' },
    { image: '/avatarFooter.svg', title: 'Мой профиль' },
];

export const TabletFooter = () => (
    <div className={s.tabletFooter} data-test-id='footer'>
        {icons.map((icon, index) => (
            <Button variant='' key={index} className={s.iconContainer}>
                <img src={icon.image} width='28' height='28' />
                <span className={s.title}>{icon.title}</span>
            </Button>
        ))}
    </div>
);
