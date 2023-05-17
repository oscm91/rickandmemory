// Importing necessary types from React
import React, { ReactNode } from 'react';
// Importing styles
import styles from './page.module.scss';

// Defining the props for the Page component
export interface PageProps {
  children: ReactNode; // The children to be rendered inside the page
}

// Defining the Page component
export function Page({ children }: PageProps) {
  return (
    // Creating a div for the page with a class from the styles
    <div className={styles['page']}>
      {React.Children.map(children, (child) => {
        // For each child, if it is a valid React element, clone it and add a class to it
        if (React.isValidElement<React.HTMLAttributes<HTMLElement>>(child)) {
          // Determine the class based on the type of the child
          const className = ['header', 'main', 'footer', 'output'].includes(child.type as string)
            ? styles[`page--${child.type}`]
            : undefined;

          // Clone the child and add the class to it
          return React.cloneElement(child, { className });
        }
        // If the child is not a valid React element, just render it as is
        return child;
      })}
    </div>
  );
}

export default Page;
