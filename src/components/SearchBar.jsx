/* eslint-disable react/prop-types */
import IMAGES from '../images/Images.jsx';
import styles from './SearchBar.module.css';

const SearchBar = ({ query, setQuery }) => {
  return (
    <form className={styles.searchForm}>
      <input
        className={styles.searchInput}
        type="text"
        placeholder="Search your pokemon"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <input
        type="image"
        src={IMAGES.searchIcon}
        className={styles.searchIcon}
        alt="search button"
        onClick={(e) => {
          e.preventDefault();
        }}
      />
    </form>
  );
};

export default SearchBar;
