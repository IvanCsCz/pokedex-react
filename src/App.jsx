import styles from './App.module.css';
import IMAGES from './images/Images.jsx';

function App() {
  return (
    <>
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <img src={IMAGES.logo} alt="logo pokemon" className={styles.logo} />
        </header>

        <main className={styles.main}>
          <form className={styles.searchForm}>
            <input
              type="text"
              name=""
              placeholder="Search your pokemon"
              className={styles.searchInput}
            />
            <input
              type="image"
              src={IMAGES.searchIcon}
              className={styles.searchIcon}
              alt="search button"
            />
          </form>
        </main>

        <aside className={styles.aside}>
          <p>aside</p>
        </aside>

        <footer className={styles.footer}>
          <p>footer</p>
        </footer>
      </div>
    </>
  );
}

export default App;
