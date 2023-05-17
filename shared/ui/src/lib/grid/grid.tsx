// Importing necessary types from React
import React, { ReactNode } from 'react';
// Importing styles
import styles from './grid.module.scss';

// Defining the props for the Grid component
export interface GridProps {
  children: ReactNode; // The children to be rendered inside the grid
}

// Defining the Grid component
export function Grid({children}: GridProps) {
  return (
    <div className={styles['grid']}>
      {React.Children.map(children, (child, i) => {
        // For each child, if it is a valid React element, wrap it in a div with the appropriate class
        if (React.isValidElement<React.HTMLAttributes<HTMLElement>>(child)) {
          return <div key={`grid-item-${i}`} className={styles['grid--item']}>{child}</div>;
        }
        // If the child is not a valid React element, just render it as is
        return child;
      })}
    </div>
  );
}

export default Grid;
