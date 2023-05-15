import { ButtonHTMLAttributes } from 'react';
import styles from './index.module.scss';

/* eslint-disable-next-line */
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>  {
  variant: 'primary' | 'secondary',
  label: string,
  status: 'active' | 'hover' | 'default',
}


export function Button(props: ButtonProps) {
  const { variant, label, onClick, status } = props;
  const buttonType = variant === 'secondary' ? 'button--secondary' : 'button--primary';
  const buttonStatus = `${buttonType}${status === 'active' ? '--active' : status === 'hover' ? '--hover' : ''}`;

  return (
    <button className={`${styles['button']} ${styles[buttonType]} ${styles[buttonStatus]}`} onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;