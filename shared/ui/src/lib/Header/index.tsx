// Importing styles
import styles from './index.module.scss';
// Importing image
import rickTitle from '../../assets/rick-title.png';

// Defining the Header component
export const Header: React.FC = () => {
  return (
    // Creating a div for the header with a class from the styles
    <div className={styles['header']}>
      {/* Inserting an image with a class from the styles, the source is the imported image, and an alt text*/}
      <img className={styles['header--image']} src={rickTitle} alt="Rick title" />
      {/*Inserting a h1 element with a class from the styles and the text "Juego de memoria"*/}
      <h1 className={styles['header--title']}>Juego de memoria</h1>
    </div>
  );
};

export default Header;
