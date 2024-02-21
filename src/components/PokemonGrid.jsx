import IMAGES from '../images/Images';
import PokemonCard from './PokemonCard';
import styles from './PokemonGrid.module.css';

const PokemonGrid = () => {
  return (
    <section className={styles.cardsWrapper}>
      <PokemonCard
        picture={IMAGES.pokePic}
        pokedexNum={'N°001'}
        pokemonName={'Bulbasaur'}
        types={['Grass', 'Poison']}
      />
    </section>
  );
};

export default PokemonGrid;
