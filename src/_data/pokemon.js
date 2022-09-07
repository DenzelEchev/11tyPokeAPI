const EleventyFetch = require("@11ty/eleventy-fetch");
const pokemon = "gardevoir";

async function getPokemon() {
  const url = `https://pokeapi.co/api/v2/pokemon/?limit=30`;
  const response = EleventyFetch(url, {
    duration: "1d",
    type: "json",
  });
  const pokeData = await response;
  return pokeData;
}

module.exports = getPokemon;
