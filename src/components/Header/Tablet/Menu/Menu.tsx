import {
    Button,
    Collapse,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerHeader,
    DrawerOverlay,
    Flex,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { menuItems } from '~/components/Sidebar/Sidebar';

import s from './Menu.module.css';

type MenuProps = {
    isOpen: boolean;
    onClose: () => void;
};

export const Menu = ({ isOpen, onClose }: MenuProps) => {
    const navigate = useNavigate();
    const [openMenus, setOpenMenus] = useState<{ [key: number]: boolean }>({});

    const handleCategoryClick = (index: number) => {
        setOpenMenus(() => ({
            [index]: !openMenus[index],
        }));
    };

    const handleSubItemClick = (categorySlug: string, subSlug: string) => {
        navigate(`/${categorySlug}/${subSlug}`);
        onClose();
    };

    return (
        <Drawer placement='left' onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>Категории</DrawerHeader>
                <DrawerBody>
                    {menuItems.map((item, index) => (
                        <div key={index}>
                            <Button
                                variant=''
                                className={s.button}
                                width='100%'
                                justifyContent='flex-start'
                                onClick={() => handleCategoryClick(index)}
                                mb={1}
                            >
                                <Flex align='center' gap={2}>
                                    {item.icon && (
                                        <img
                                            src={item.icon}
                                            alt={item.title}
                                            width='24'
                                            height='24'
                                        />
                                    )}
                                    <span>{item.title}</span>
                                </Flex>
                            </Button>

                            <Collapse in={openMenus[index]} animateOpacity>
                                <div style={{ paddingLeft: '1.5rem' }}>
                                    {item.subItems.map((subItem, subIndex) => (
                                        <Button
                                            key={subIndex}
                                            variant='ghost'
                                            size='sm'
                                            justifyContent='flex-start'
                                            width='100%'
                                            onClick={() =>
                                                handleSubItemClick(item.slug, subItem.slug)
                                            }
                                            mb={1}
                                        >
                                            {subItem.title}
                                        </Button>
                                    ))}
                                </div>
                            </Collapse>
                        </div>
                    ))}
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    );
};
