const fetchData = require('../utils');
const API = 'https://rickandmortyapi.com/api/character/';



const anotherFunction = async () => {
    try {
        
        const data = await fetchData(API);
        console.log(data.info.count)
        const character = await fetchData(`${API}${data.results[0].id}`);
        console.log(character.name);
        const origin = await fetchData(character.origin.url);
        console.log(origin.dimension);

    } catch (error) {
        console.error(error);
    }
}

anotherFunction();