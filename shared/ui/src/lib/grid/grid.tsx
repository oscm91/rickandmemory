import React, { ReactNode } from 'react';
import styles from './grid.module.scss';

/* eslint-disable-next-line */
export interface GridProps {
  children: ReactNode;
}

export function Grid(props: GridProps) {
  const childrenArray = React.Children.toArray(props.children);

  return (
    <div className={styles['grid']} {...props}>
      {childrenArray.map((child, i) => {
        if (React.isValidElement<React.HTMLAttributes<HTMLElement>>(child)) {
          return <div key={`grid-item-${i}`} className={styles['grid--item']}>{child}</div>;
        }
        return child;
      })}
    </div>
  );
}

export default Grid;
