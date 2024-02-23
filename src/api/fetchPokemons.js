import { formatPokemonName } from '../utils/utils';

export async function fetchPokemons() {
  const response = await fetch(
    'https://unpkg.com/pokemons@1.1.0/pokemons.json'
  );
  if (!response.ok) {
    throw new Error('Failed to fetch pokemons');
  }
  const { results } = await response.json();

  const pokemons = results.map((pokemon) => {
    return {
      id: pokemon.national_number,
      name: pokemon.name,
      types: pokemon.type,
      imgSrc: `https://img.pokemondb.net/sprites/black-white/anim/normal/${formatPokemonName(
        pokemon.name.toLowerCase()
      )}.gif`,
    };
  });

  const uniquePokemons = pokemons.filter((obj, index) => {
    return index === pokemons.findIndex((o) => obj.id === o.id);
  });

  return uniquePokemons;
}
