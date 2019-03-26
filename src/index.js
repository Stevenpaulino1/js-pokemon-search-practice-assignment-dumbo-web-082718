document.addEventListener("DOMContentLoaded", () => {
  fetchPokemon();
  function fetchPokemon() {
    fetch("http://localhost:3000/pokemon")
      .then(r => r.json())
      // .then(poke => console.log("pokemon", poke));
      .then(poke => iteratePoke(poke));
  }

  function iteratePoke(pokemon) {
    pokemon.forEach(poke => renderPoke(poke));
  }

  function renderPoke(pokemon) {
    console.log("renderPoke", pokemon);
    const pokemonContainer = document.querySelector("#pokemon-container");
    const pokeUL = document.createElement("ul");
    const pokeLi = document.createElement("li");
    pokeLi.innerText = pokemon.name;
    pokeUL.append(pokeLi);
    pokemonContainer.append(pokeUL);
  }
});
