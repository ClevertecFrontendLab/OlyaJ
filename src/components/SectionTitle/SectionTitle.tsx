import clsx from 'clsx';

import s from './SectionTitle.module.css';

type SectionTitleType = {
    title: string;
    className?: string;
};

export const SectionTitle = ({ title, className }: SectionTitleType) => (
    <span className={clsx(s.sectionTitle, className)}>{title}</span>
);
