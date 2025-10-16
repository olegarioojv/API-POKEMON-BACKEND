import Pokemon from '../../model/pokemon/Pokemon.js';

const destroyPokemon = async (id) => {
    const qtdDestroyed = await Pokemon.destroy({
        where: {
            id
        }
    })

    if(!qtdDestroyed){
        return false
    }

    return qtdDestroyed
}

export default destroyPokemon