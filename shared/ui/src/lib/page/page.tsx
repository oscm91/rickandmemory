import React, { ReactNode } from 'react';
import styles from './page.module.scss';

/* eslint-disable-next-line */
export interface PageProps {
  children: ReactNode;
}

export function Page(props: PageProps) {
  return (
    <div className={styles['page']}>
      {React.Children.map(props.children, (child) => {
        if (React.isValidElement<React.HTMLAttributes<HTMLElement>>(child)) {
          switch (child.type) {
            case 'header':
              return React.cloneElement(child, { className: styles['page--header'] });
            case 'main':
              return React.cloneElement(child, { className: styles['page--main'] });
            case 'footer':
              return React.cloneElement(child, { className: styles['page--footer'] });
            default:
              return child;
          }
        }
        return child;
      })}
    </div>
  );
}

export default Page;
