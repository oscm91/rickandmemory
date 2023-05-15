import styles from './index.module.scss';
import cardflip from '../../assets/card-flip.png'

interface CardProps {
  id: string;
  index: number;
  selected: boolean;
  disabled: boolean;
  image: string;
  value: string;
}

export const Card: React.FC<CardProps> = ({
  id,
  index,
  selected,
  disabled,
  image,
  value,
}) => {
  const baseClasses = "cursor-pointer w-full h-full transition ease-in delay-150 transform hover:translate-x-1 hexagons";
  const pointerEventsClass = selected ? "pointer-events-none" : "";
  const bgColorClass =
    selected && disabled
      ? "bg-light-grey"
      : selected && !disabled
      ? "bg-orange"
      : "";

  const isSelected = selected;

  const divClasses = `${styles['card']} ${isSelected ? styles['card--active'] : ''} ${pointerEventsClass}`;

  const buttonClasses = `${selected ? "" : "hidden"}`;

  return (
    <div data-id={id} data-testid={index + 1} className={divClasses}>
      <button
        data-id={id}
        data-testid={`grid-value${index + 1}`}
        className={buttonClasses}
      >
        <img
          src={image}
          alt={value}
          className={`${styles['card--image']}`}
        />
        <h3 className={styles['card--name']}>Rick Sanchez</h3>
        <p className={styles['card--info']}><span className={styles['card--status']} aria-live="polite">Alive</span> - <span className={styles['card--species']}>Human</span></p>
      </button>
      <img className={`${styles['card--flipimage']} ${isSelected ? styles['card--flipimage--active'] : ''}`} src={cardflip} alt="" />
    </div>
  );
};

export default Card;
