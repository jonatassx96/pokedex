
function convertPokemonTypesToLi(pokemonTypes) {
  return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)
}

function convertPokemonNameUpperCase(pokemonName) {
  const pokemonNameLowerCase = pokemonName
  const pokemonUpperCase = pokemonNameLowerCase[0].toUpperCase() + pokemonNameLowerCase.substr(1);
  return pokemonUpperCase
}

function convertPokemonToLi(pokemon) {
  return `
    <li class="pokemon">
      <span class="number-pokemon">#${pokemon.order}</span>
      <span class="name">${convertPokemonNameUpperCase(pokemon.name)}</span>
      <div class="detail">
        <ol class="types">
          ${convertPokemonTypesToLi(pokemon.types).join('')}
        </ol>
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
          alt="${pokemon.name}"
        />
      </div>
    </li>
  `
}

const pokemonOl = document.getElementById('pokemonList')
//Processamento assincrono

pokeApi.getPokemons().then((pokemons = []) => {
  pokemonOl.innerHTML += pokemons.map(convertPokemonToLi).join('')
})