const pokemon = document.getElementById("pokeName").innerHTML
const endpoint = `https://pokeapi.co/api/v2/pokemon/${pokemon}`

async function fetchPokemon(pokemonId){
const res = await fetch(endpoint)
    const pokeData = await res.json()
    return generatePokemon(pokeData)
}

function findTypeForClass(pokemon){
    if(pokemon.types.length > 0){
        return pokemon.types[0].type.name
    }else{
        return ""
    }
}

const generatePokemon = (data) => {
    const html = `
    <div class="pokeFetch ${findTypeForClass(data)}">
        <div class="imgcard ${findTypeForClass(data)}">
        <img class="pokeImg"src="${data.sprites.other["official-artwork"].front_default}">
        <div class="typeSec">
        ${data.types.map(type => `
            <span class="${type.type.name}">${type.type.name}</span>
        `)}
        </div>
        </div>
        <section class="details">
        <div class="pokeName ${findTypeForClass(data)}">#${data.id}&nbsp| ${data.name[0].toUpperCase() + data.name.substring(1)}</div>
        <div class="stats ${findTypeForClass(data)}">
        <span>Height:${data.height/10}m &nbsp| Weight:${data.weight/10}kg</span>
        </div>

        <div class="buttonSect">
        <button id="pokeButton">Previous<img src="${data.sprites.front_default}"> </button>
        <button id="pokeButton">Next <img src="${data.sprites.front_default}"></button>
        </div>
        </section>
    </div>
    `
    const pokemonDiv = document.querySelector('.pokeContainer')
    pokemonDiv.innerHTML = html
    


}

fetchPokemon()