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
          <p>main</p>
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
