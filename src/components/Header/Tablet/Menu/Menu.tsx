import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Drawer,
    DrawerBody,
    DrawerContent,
    DrawerOverlay,
    Flex,
    Text,
    VStack,
    Box,
} from '@chakra-ui/react';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { menuItems } from '~/components/Sidebar/Sidebar';
import { useBreadcrumb } from '~/utils/BreadcrumbsContext';

import clsx from 'clsx';

import s from './Menu.module.css';
import styles from './../../../Sidebar/Sidebar.module.css';
import { Breadcrumbs } from '~/components/Breadcrumbs/Breadcrumbs';
import { CloseIcon } from '@chakra-ui/icons';

type MenuProps = {
    isOpen: boolean;
    onClose: () => void;
};

export const Menu = ({ isOpen, onClose }: MenuProps) => {
    const navigate = useNavigate();
    const { category } = useParams();
    const { setBreadcrumbs } = useBreadcrumb();
    const [expandedIndex, setExpandedIndex] = useState<number[]>([]);

    useEffect(() => {
        const activeIndex = menuItems.findIndex((item) => item.slug === category);
        setExpandedIndex(activeIndex >= 0 ? [activeIndex] : []);
    }, [category]);

    const handleCategoryClick = (item: (typeof menuItems)[number], index: number) => {
        setExpandedIndex([index]);

        const firstSubItem = item.subItems?.[0];

        if (firstSubItem) {
            navigate(`/${item.slug}/${firstSubItem.slug}`);
            setBreadcrumbs({
                accordion: item.title,
                subItem: firstSubItem.title,
                title: null,
            });
        }
    };

    return (
        <div>
            <Drawer placement='right' onClose={onClose} isOpen={isOpen} size='xs'>
                <DrawerOverlay />
                <DrawerContent
                    as='nav'
                    data-test-id='nav'
                    maxW='344px'
                    h='868px'
                    display='flex'
                    flexDirection='column'
                    ml='auto'
                >
                    <Flex justify='flex-end' p='4'>
                        <CloseIcon
                            data-test-id='close-icon'
                            onClick={onClose}
                            w='16px'
                            h='16px'
                            cursor='pointer'
                        />
                    </Flex>

                    <Box px={4} pt={2} pb={4} data-test-id='breadcrumbs' onClick={onClose}>
                        <Breadcrumbs data-test-id='breadcrumbs' />
                    </Box>

                    <DrawerBody p={0} flex='1' overflowY='auto'>
                        <Box px={4} overflowY='auto' maxH='calc(100vh - 220px)'>
                            <Accordion
                                index={expandedIndex}
                                onChange={(index) =>
                                    setExpandedIndex(Array.isArray(index) ? index : [index])
                                }
                                allowToggle
                            >
                                {menuItems.map((item, index) => (
                                    <AccordionItem key={item.slug} border='none'>
                                        <h2>
                                            {isOpen && (
                                                <AccordionButton
                                                    onClick={() => handleCategoryClick(item, index)}
                                                    _hover={{ bg: '#EAFFC7' }}
                                                    backgroundColor={
                                                        expandedIndex.includes(index)
                                                            ? '#EAFFC7'
                                                            : 'transparent'
                                                    }
                                                    fontWeight='600'
                                                    fontSize='16px'
                                                    py={2}
                                                    data-test-id={
                                                        item.slug === 'vegan'
                                                            ? 'vegan-cuisine'
                                                            : item.slug
                                                    }
                                                >
                                                    <Flex
                                                        flex='1'
                                                        textAlign='left'
                                                        align='center'
                                                        gap={2}
                                                    >
                                                        <img
                                                            src={item.icon}
                                                            alt={item.title}
                                                            width='24'
                                                            height='24'
                                                        />
                                                        <Text>{item.title}</Text>
                                                    </Flex>
                                                    <AccordionIcon />
                                                </AccordionButton>
                                            )}
                                        </h2>

                                        <AccordionPanel pb={2}>
                                            <VStack align='start' spacing={2}>
                                                {item.subItems.map((subItem) => (
                                                    <NavLink
                                                        to={`/${item.slug}/${subItem.slug}`}
                                                        key={subItem.slug}
                                                        className={({ isActive }) =>
                                                            clsx(s.submenuItem, {
                                                                [s.active]: isActive,
                                                            })
                                                        }
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            setBreadcrumbs({
                                                                subItem: subItem.title,
                                                                title: null,
                                                            });
                                                            navigate(
                                                                `/${item.slug}/${subItem.slug}`,
                                                            );
                                                        }}
                                                    >
                                                        {subItem.title}
                                                    </NavLink>
                                                ))}
                                            </VStack>
                                        </AccordionPanel>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </Box>
                    </DrawerBody>

                    {/* Футер не скроллится */}
                    <div className={styles.sidebarFooter}>
                        <span className={styles.version}>Версия программы 03.25</span>
                        <span className={styles.text}>
                            Все права защищены, ученический файл, ©Клевер Технолоджи, 2025
                        </span>
                        <div className={styles.exit}>
                            <img src='/logout.svg' alt='logout' width='12' height='12' />
                            <span className={styles.exitText}>Выйти</span>
                        </div>
                    </div>
                </DrawerContent>
            </Drawer>
        </div>
    );
};
