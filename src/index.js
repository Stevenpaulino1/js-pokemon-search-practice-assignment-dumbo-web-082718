document.addEventListener("DOMContentLoaded", () => {
  fetchPokemon();
  function fetchPokemon() {
    fetch("http://localhost:3000/pokemon")
      .then(r => r.json())
      .then(poke => console.log("pokemon", poke));
  }
});
