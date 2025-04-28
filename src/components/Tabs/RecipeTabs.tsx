import { Tabs, TabList, Tab } from '@chakra-ui/react';
import s from './RecipeTabs.module.css';
import { useNavigate, useParams } from 'react-router-dom';
import clsx from 'clsx';
import { useBreadcrumb } from '~/utils/BreadcrumbsContext';
import { getTitlesBySlugs } from '~/utils/GetTitlesBySlugs';

type RecipeTabsProps = {
    tabs: { title: string; slug: string }[];
    defaultIndex?: number;
};

export const RecipeTabs = ({ tabs, defaultIndex = 0 }: RecipeTabsProps) => {
    const navigate = useNavigate();
    const { category, subcategory } = useParams<{
        category: string;
        subcategory: string;
    }>();

    const { setBreadcrumbs } = useBreadcrumb();

    const activeIndex = tabs.findIndex((tab) => tab.slug === subcategory);
    const currentIndex = activeIndex >= 0 ? activeIndex : defaultIndex;

    const handleChange = (index: number) => {
        const selectedTab = tabs[index];
        navigate(`/${category}/${selectedTab.slug}`);

        const { categoryTitle } = getTitlesBySlugs(category, selectedTab.slug);

        setBreadcrumbs({
            accordion: categoryTitle,
            subItem: selectedTab.title,
        });
    };

    return (
        <Tabs index={currentIndex} onChange={handleChange}>
            <TabList className={s.tabsContainer}>
                {tabs.map((tab, idx) => (
                    <Tab
                        key={idx}
                        className={clsx(s.tab, { [s.activeTab]: currentIndex === idx })}
                        _selected={{ color: '#2db100', borderBottom: '2px solid #2db100' }}
                        data-test-id={`tab-${tab.slug}-${idx}`}
                    >
                        {tab.title}
                    </Tab>
                ))}
            </TabList>
        </Tabs>
    );
};
