import { useEffect, useState } from 'react';
import styles from './App.module.css';
import { fetchPokemons } from './api/fetchPokemons.js';
import Header from './components/Header.jsx';
import LoadingScreen from './components/LoadingScreen.jsx';
import PokemonGrid from './components/PokemonGrid.jsx';
import SearchBar from './components/SearchBar.jsx';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [pokemons, setPokemons] = useState('');

  useEffect(() => {
    const fetchAllPokemons = async () => {
      setIsLoading(true);
      const allPokemons = await fetchPokemons();
      setPokemons(allPokemons);
      setIsLoading(false);
    };

    fetchAllPokemons();
  }, []);

  if (isLoading || !pokemons) {
    return <LoadingScreen />;
  }

  return (
    <>
      <div className={styles.wrapper}>
        <Header />

        <main className={styles.main}>
          <SearchBar query={query} setQuery={setQuery} />
          <PokemonGrid pokemons={pokemons} query={query} />
        </main>
      </div>
    </>
  );
}

export default App;
