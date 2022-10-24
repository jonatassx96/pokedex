const offset = 0;
const limit = 10;
const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

function convertPokemonToLi(pokemon) {
  return `
    <li class="pokemon">
      <span class="number-pokemon">#001</span>
      <span class="name">${pokemon.name}</span>
      <div class="detail">
        <ol class="types">
          <li class="type">grass</li>
          <li class="type">poison</li>
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
fetch(url)
  .then((response) => response.json())
  .then((jsonBody) => jsonBody.results)
  .then((pokemonList) => {
    for (let i = 1; i < pokemonList.length; i++){
      const pokemon = pokemonList[i]
      pokemonOl.innerHTML += convertPokemonToLi(pokemon)
    }
  })
  .catch((error) => console.log(error))
