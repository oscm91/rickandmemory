import React, { ReactNode } from 'react';
import styles from './grid.module.scss';

/* eslint-disable-next-line */
export interface GridProps {
  children: ReactNode;
}

export function Grid(props: GridProps) {
  return (
    <div className={styles['grid']}>
      {React.Children.map(props.children, (child) => {
        if (React.isValidElement<React.HTMLAttributes<HTMLElement>>(child)) {
          return <div className={styles['grid--item']}>{child}</div>;
        }
        return child;
      })}
    </div>
  );
}

export default Grid;
