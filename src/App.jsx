import { useEffect, useState } from 'react';
import styles from './App.module.css';
import { fetchPokemons } from './api/fetchPokemons.js';
import Header from './components/Header.jsx';
import PokemonGrid from './components/PokemonGrid.jsx';
import SearchBar from './components/SearchBar.jsx';

function App() {
  const [query, setQuery] = useState('');
  const [pokemons, setPokemons] = useState('');

  useEffect(() => {
    const fetchAllPokemons = async () => {
      const allPokemons = await fetchPokemons();
      setPokemons(allPokemons);
    };

    fetchAllPokemons();
  }, []);

  return (
    <>
      <div className={styles.wrapper}>
        <Header />

        <main className={styles.main}>
          <SearchBar query={query} setQuery={setQuery} />
          <PokemonGrid pokemons={pokemons} />
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
