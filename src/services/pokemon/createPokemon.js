import Model from '../../model/index.js'

const createPokemon = async (pokemon) => {
    try {
        
        const create = await Model.Pokemon.create({
            name: pokemon.name,
            nature: pokemon.nature,
            tipo: pokemon.tipo,
            sexo: pokemon.sexo,
            level: pokemon.level
        })

        if (!pokemon){
            return false;
        }

        return pokemon;

    } catch (error) {
        return false;
    }
}

export default createPokemon;