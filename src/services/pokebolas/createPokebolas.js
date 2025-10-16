import Pokebola from "../../model/pokebolas/Pokebolas.js";

const createPokebolas = async (Pokebolas, PokemonId) => {
    const response = {
        success: [],
        error: []
    }

    for (const pokebola of Pokebolas) {
        const PokebolaCreated = await Pokebola.create({
            nome: pokebola, 
            PokemonId
        });

        if (!PokebolaCreated) {
            response.error.push(pokebola);
            continue;
        }

        response.success.push(pokebola);
    }

    return response;
};

export default createPokebolas;
