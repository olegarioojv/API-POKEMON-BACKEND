import Pokemon from '../../model/pokemon/Pokemon.js';

const updatePokemon = async (data, id) => {
    const qtdUpdated = await Pokemon.update(data, 
        {
            where: {
                id
            }
        })
    
        if (qtdUpdated == 0){
            return false
        }

        const pokemon = await Pokemon.findByPk(id)

        return pokemon
}

export default updatePokemon