const fetchData = require('../utils/fetchData');
const   fechData = require ('../utils/fetchData');
const API = 'https://rickandmortyapi.com/api/character/';

const otraFuncion = async (url_api) => {
    try{
        const data = await fechData(url_api);
        const character = await fechData(`${API}${data.results[0].id}`);
        const origin = await fetchData(character.origin.url);

        console.log(data.info.count);
        console.log(character.name);
        console.log(origin.dimension);
        
    }catch(error){
        console.error(error)
    }
}

console.log('Before');
otraFuncion(API);
console.log('After');