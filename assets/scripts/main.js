
const pokemonOl = document.getElementById("pokemonList");
const moreButton = document.getElementById("more")
const newPagePokemon = document.getElementsByClassName("pokemon")
const limit = 60;
let offset = 0;
const maxRecords = 251


//Deixando a primeira letra maiuscula
function convertPokemonNameUpperCase(pokemonName) {
  const pokemonNameLowerCase = pokemonName;
  const pokemonUpperCase =
    pokemonNameLowerCase[0].toUpperCase() + pokemonNameLowerCase.substr(1);
  return pokemonUpperCase;
}
//Deixando id do pokemon com 3 digitos
function idThreeDigits(idPokemon) {
  let idTrhee = idPokemon;
  if (idTrhee <= 9) {
    idTrhee = `00${idTrhee}`;
  } else if (idTrhee <= 99) {
    idTrhee = `0${idTrhee}`;
  } else if (idTrhee > 99) {
    idTrhee = `${idTrhee}`;
  }
  return idTrhee;
}

function convertPokemonToLi(pokemon) {
  return `
    <li class="pokemon ${pokemon.type}">
      <span class="number-pokemon">#${idThreeDigits(pokemon.id)}</span>
      <span class="name">${convertPokemonNameUpperCase(pokemon.name)}</span>
      <div class="detail">
        <ol class="types">
          ${pokemon.types
            .map((type) => `<li class="type btn-${type}">${type}</li>`)
            .join("")}
        </ol>
          <div class="container-img">
            
              <img  class="img-pokemon" onclick="moreInfoPokemon()"
                src="${pokemon.photo}"
                alt="${pokemon.name}"
              />
            
          </div>
          <img src="./assets/imagens/pokeball.png" class="img-bg-pokemon"
          alt="fundo"
          />
      </div>
    </li>
  `;
}


//Processamento assincrono

function loadPokemons(offset, limit) {
  pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
    const newHtml = pokemons.map(convertPokemonToLi).join("");
    pokemonOl.innerHTML += newHtml
  });
}

loadPokemons(offset, limit)

moreButton.addEventListener('click', () => {
  offset += limit

  const qtdRecord = offset + limit
  if(qtdRecord >= maxRecords){
    const newLimit = qtdRecord - 289
    loadPokemons(offset, newLimit)

    moreButton.parentElement.removeChild(moreButton)
  } else {
    loadPokemons(offset, limit)
  }
  
})

function moreInfoPokemon() {
  console.log('oi')
}
