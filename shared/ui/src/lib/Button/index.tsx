// Importing necessary types from React
import { ButtonHTMLAttributes } from 'react';
// Importing styles
import styles from './index.module.scss';

// Defining the props for the Button component
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'primary' | 'secondary'; // Variant can be 'primary' or 'secondary'
  status?: 'active' | 'hover' | 'default'; // Status can be 'active', 'hover', or 'default'
}

// Defining the Button component
export function Button(props: ButtonProps) {
  const { variant, status, children, ...otherProps } = props;

  // Determine the button type based on the variant prop
  const buttonType = variant === 'secondary' ? 'button--secondary' : 'button--primary';
  
  // Determine the button status based on the status prop
  const buttonStatus = status === 'active' ? '--active' : status === 'hover' ? '--hover' : '';

  // Construct the className using the buttonType and buttonStatus
  const className = `${styles['button']} ${styles[buttonType]} ${styles[`${buttonType}${buttonStatus}`]}`;

  // Return a button element with the appropriate classes and props
  return (
    <button
      className={className}
      {...otherProps}
    >
      {children}
    </button>
  );
}

export default Button;
