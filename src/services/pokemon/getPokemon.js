import Model from '../../model/index.js';

const getOne = async (id) => {
    try {
        
        const pokemon = await Model.Pokemon.findOne({
            where: {
                id: id,
            },
        })

        if (!pokemon) {
            return false;
        }

        return pokemon;
    } catch (error) {
        throw new Error(error.message);
    }
}

export default getOne;