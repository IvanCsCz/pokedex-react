import PokemonCard from './PokemonCard';
import styles from './PokemonGrid.module.css';

const PokemonGrid = ({ pokemons, query }) => {
  const firstGeneration = pokemons.slice(0, 151);

  return (
    <section className={styles.cardsWrapper}>
      <div className={styles.pokemonGrid}>
        {firstGeneration
          .filter((pokemon) =>
            pokemon.name.toLowerCase().match(query.toLowerCase())
          )
          .map((pokemon) => (
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
