import styles from './index.module.scss';
import cardflip from '../../assets/card-flip.png'

interface CardProps {
  id: string;
  index: number;
  selected: boolean;
  disabled: boolean;
  image: string;
  value: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export const Card: React.FC<CardProps> = ({
  id,
  index,
  selected,
  disabled,
  image,
  value,
  onClick
}) => {
  const divClasses = `${styles['card']} ${selected ? styles['card--active'] : ''} ${selected && disabled ? styles['card--disabled'] : ''}`;
  const buttonClasses = `${selected ? "" : styles["card--hidden"]}`;

  return (
    <div className={divClasses} data-id={id}
    data-testid={`grid-value${index + 1}`} onClick={disabled ? () => {/* disabled event*/} : onClick}>
      <button className={buttonClasses}>
        <img
          src={image}
          alt={value}
          className={`${styles['card--image']}`}
        />
        <h3 className={styles['card--name']}>Rick Sanchez</h3>
        <p className={styles['card--info']}><span className={styles['card--status']} aria-live="polite">Alive</span> - <span className={styles['card--species']}>Human</span></p>
      </button>
      <img className={`${styles['card--flipimage']} ${selected ? styles['card--flipimage--active'] : ''}`} src={cardflip} alt="" />
    </div>
  );
};

export default Card;
