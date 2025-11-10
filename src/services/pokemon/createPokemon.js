import Model from '../../model/index.js'

const createPokemon = async (pokemon) => {
    try {
        if (!pokemon) return null;

        const created = await Model.Pokemon.create({
            name: pokemon.name,
            nature: pokemon.nature,
            tipo: pokemon.tipo,
            sexo: pokemon.sexo,
            level: pokemon.level
        });

        return created;

    } catch (error) {
        console.error('createPokemon error', error);
        return null;
    }
}

export default createPokemon;