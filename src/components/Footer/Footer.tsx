import { LineCard, LineCardType } from '../Cards/LineCard/LineCard';
import { NewRecipeCard, NewRecipeCardType } from '../Cards/NewRecipeCard/NewRecipeCard';
import { SectionTitle } from '../SectionTitle/SectionTitle';
import s from './Footer.module.css';

type FooterType = {
    title: string;
    text: string;
    cards: NewRecipeCardType[];
    lineCards: LineCardType[];
};

export const Footer = ({ title, text, cards, lineCards }: FooterType) => (
    <div className={s.footer}>
        <div className={s.titleContainer}>
            <SectionTitle title={title} />
            <p className={s.text}>{text}</p>
        </div>

        <div className={s.allCardsContainer}>
            <div className={s.cardContainer}>
                {cards.map((card, index) => (
                    <NewRecipeCard
                        key={index}
                        title={card.title}
                        description={card.description}
                        isSaved={card.isSaved}
                        savesCount={card.savesCount}
                        isLiked={card.isLiked}
                        likesCount={card.likesCount}
                        category={card.category}
                        icon={card.icon}
                        showDescription={true}
                        variant='expanded'
                    />
                ))}
            </div>

            <div className={s.lineCardsContainer}>
                {lineCards.map((lineCard, index) => (
                    <LineCard key={index} title={lineCard.title} icon={lineCard.icon} />
                ))}
            </div>
        </div>
    </div>
);
