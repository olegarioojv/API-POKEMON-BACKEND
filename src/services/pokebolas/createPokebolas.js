import Pokebola from "../../model/pokebolas/Pokebolas.js";

const createPokebolas = async (pokebolas, pokemonId) => {

    console.log("Olá mundo")

    const response = {
        success: [],
        error: []
    };

    if (!pokebolas) return response;

    // const list = Array.isArray(pokebolas) ? pokebolas : [pokebolas];

    for (const pokebola of pokebolas) {
        console.log(pokebola)
        try {
            const PokebolaCreated = await Pokebola.create({
                pokebola: pokebola,
                pokemonId
            });

            if (!PokebolaCreated) {
                response.error.push(pokebola);
                continue;
            }

            response.success.push(PokebolaCreated);
        } catch (error) {
            console.error('createPokebolas error', error);
            response.error.push(pokebola);
        }
    }

    return response;
};

export default createPokebolas;
