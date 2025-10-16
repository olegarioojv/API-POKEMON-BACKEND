import Pokemon from "../../model/pokemon/Pokemon.js"
import Pokebola from "../../model/pokebolas/Pokebolas.js";

const getAll = async () => {
    const pokemons = await Pokemon.findAll({
        include: Pokebola
    });
    return pokemons;
};

export default getAll;
