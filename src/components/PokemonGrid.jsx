import PokemonCard from './PokemonCard';
import styles from './PokemonGrid.module.css';

const PokemonGrid = ({ pokemons }) => {
  const firstGeneration = pokemons.slice(0, 151);
  return (
    <section className={styles.cardsWrapper}>
      <div className={styles.pokemonGrid}>
        {[...firstGeneration].map((pokemon) => (
          <PokemonCard
            key={pokemon.id}
            picture={pokemon.imgSrc}
            pokedexNum={`N° ${pokemon.id}`}
            pokemonName={pokemon.name}
            types={pokemon.types}
          />
        ))}
      </div>
    </section>
  );
};

export default PokemonGrid;
