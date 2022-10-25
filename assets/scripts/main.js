

//Deixando a primeira letra maiuscula
function convertPokemonNameUpperCase(pokemonName) {
  const pokemonNameLowerCase = pokemonName
  const pokemonUpperCase = pokemonNameLowerCase[0].toUpperCase() + pokemonNameLowerCase.substr(1);
  return pokemonUpperCase
}
//Deixando id do pokemon com 3 digitos
function idThreeDigits(idPokemon) {
  let idTrhee = idPokemon
  if (idTrhee <= 9) {
    idTrhee = `00${idTrhee}`
  } else if (idTrhee <= 99) {
    idTrhee = `0${idTrhee}`
  } else if (idTrhee > 99) {
    idTrhee = `${idTrhee}`
  }
  return idTrhee
}


function convertPokemonToLi(pokemon) {
  return `
    <li class="pokemon ${pokemon.type}">
      <span class="number-pokemon">#${idThreeDigits(pokemon.id)}</span>
      <span class="name">${convertPokemonNameUpperCase(pokemon.name)}</span>
      <div class="detail">
        <ol class="types">
          ${pokemon.types.map((type) => `<li class="type btn-${type}">${type}</li>`).join('')}
        </ol>
          <img  class="img-pokemon"
            src="${pokemon.photo}"
            alt="${pokemon.name}"
          />
          <img src="./assets/imagens/pokeball.png" class="img-bg-pokemon"
          alt="fundo"
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