import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { ReactNode } from 'react';

import { Link as RouterLink, UIMatch, useMatches } from 'react-router-dom';


type Handle = {
    breadcrumb?: ReactNode;
};

type Props = {
    selectedCategory?: string;
    selectedCategorySlug?: string;
};

export const Breadcrumbs = ({ selectedCategory, selectedCategorySlug }: Props) => {
    const matches = useMatches() as UIMatch<Handle>[];

    const breadcrumbs = matches
        .filter((match) => match.handle?.breadcrumb)
        .map((match) => ({
            breadcrumb: match.handle!.breadcrumb,
            path: match.pathname,
        }));

    if (selectedCategory && selectedCategorySlug) {
        breadcrumbs.push({
            breadcrumb: selectedCategory, // или читаемое имя
            path: `/${selectedCategorySlug}`, // может быть не нужен, если не используешь переход
        });
    }

    return (
        <Breadcrumb fontSize='sm' color='gray.600' separator='›'>
            {breadcrumbs.map((crumb, index) => (
                <BreadcrumbItem key={crumb.path} isCurrentPage={index === breadcrumbs.length - 1}>
                    <BreadcrumbLink as={RouterLink} to={crumb.path}>
                        {crumb.breadcrumb}
                    </BreadcrumbLink>
                </BreadcrumbItem>
            ))}
        </Breadcrumb>
    );
};
