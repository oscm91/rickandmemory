import styles from './index.module.scss';
import rickTitle from '../../assets/rick-title.png'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface HeaderProps {
  
}

const Header: React.FC<HeaderProps> = () => {
  return (
    <div className={styles['header']}>
      <img className={styles['header--image']} src={rickTitle} alt="" />
      <h1 className={styles['header--title']}>Juego de memoria</h1>
    </div>
  );
};

export default Header;
