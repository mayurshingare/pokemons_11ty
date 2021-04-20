const axios = require('axios');

module.exports = async () => {
    var pokemons = [];
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon/');
    for (const element of response.data.results) {
        const response2 = await axios.get(element.url);
        pokemons.push(response2.data);
    }
    return pokemons;
}