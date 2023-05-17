import styles from './index.module.scss';
import cardflip from '../../assets/card-flip.png';

interface CardProps {
  id: string;
  index: number;
  selected: boolean;
  disabled: boolean;
  image: string;
  value: string;
  gender: string;
  name: string;
  species: string;
  status: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export const Card: React.FC<CardProps> = ({
  id,
  index,
  selected,
  disabled,
  image,
  value,
  name,
  species,
  status,
  onClick,
}) => {
  const divClasses = [
    styles['card'],
    selected ? styles['card--active'] : '',
    selected && disabled ? styles['card--disabled'] : '',
  ].join(' ');

  const buttonClasses = selected ? '' : styles['card--hidden'];
  const handleClick = disabled || selected ? undefined : onClick;

  return (
    <div
      className={divClasses}
      data-id={id}
      data-testid={`grid-value${index + 1}`}
      onClick={handleClick}
    >
      <button className={buttonClasses}>
        <img src={image} alt={value} className={styles['card--image']} />
        <h3 className={styles['card--name']}>{name}</h3>
        <p className={styles['card--info']}>
          <span className={styles['card--status']} aria-live="polite">
            {status}
          </span>{' '}
          - <span className={styles['card--species']}>{species}</span>
        </p>
      </button>
      <img
        className={`${styles['card--flipimage']} ${
          selected ? styles['card--flipimage--active'] : ''
        }`}
        src={cardflip}
        alt="Rick Logo"
      />
    </div>
  );
};

export default Card;
