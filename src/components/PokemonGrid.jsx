import PokemonCard from './PokemonCard';
import styles from './PokemonGrid.module.css';

const PokemonGrid = ({ pokemons }) => {
  const firstGeneration = pokemons.slice(0, 151);
  console.log(firstGeneration);
  return (
    <section className={styles.cardsWrapper}>
      {[...firstGeneration].map((pokemon) => (
        <PokemonCard
          key={pokemon.id}
          picture={pokemon.imgSrc}
          pokedexNum={`N° ${pokemon.id}`}
          pokemonName={pokemon.name}
          types={pokemon.types}
        />
      ))}
    </section>
  );
};

export default PokemonGrid;
