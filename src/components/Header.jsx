import IMAGES from '../images/Images.jsx';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={IMAGES.logo} alt="logo pokemon" className={styles.logo} />
    </header>
  );
};

export default Header;
