import s from './ReviewCard.module.css';

type ReviewCardType = {
    image: string;
    name: string;
    email: string;
    text: string;
};

export const ReviewCard = ({ image, name, email, text }: ReviewCardType) => (
    <div className={s.reviewContainer}>
        <div className={s.avatarContainer}>
            <img src={image} alt='avatar' className={s.avatar} />
            <div className={s.nameEmailContainar}>
                <span className={s.name}>{name}</span>
                <span>{email}</span>
            </div>
        </div>
        <p className={s.text}>{text}</p>
    </div>
);
