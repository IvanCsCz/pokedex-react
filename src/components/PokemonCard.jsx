import styles from './PokemonCard.module.css';
import Types from './Types';
const PokemonCard = ({ picture, pokedexNum, pokemonName, types }) => {
  return (
    <div className={styles.card}>
      <img className={styles.pokemonPic} src={picture} alt="" />
      <span className={styles.pokedexNum}>{pokedexNum}</span>
      <span className={styles.pokemonName}>{pokemonName}</span>
      <div className={styles.types}>
        {types.map((typeName) => (
          <Types key={typeName} name={typeName} typeName={typeName} />
        ))}
      </div>
    </div>
  );
};

export default PokemonCard;
