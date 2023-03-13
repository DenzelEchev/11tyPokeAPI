const pokeListFetch = require("@11ty/eleventy-fetch");
const url = `https://pokeapi.co/api/v2/pokemon/?limit=20`;


async function getPokemon() {
  const response = pokeListFetch(url, {
    duration: "1h",
    type: "json",
    directory: "./src/_data/pokemon.json"
  });
  const pokeData = await response;
  return pokeData;
}


module.exports = getPokemon;
