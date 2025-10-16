import sequelize from '../config/database.js';
import Pokemon from './pokemon/Pokemon.js';
import Pokebola from '../model/pokebolas/Pokebolas.js';
import User from './user/User.js';


Pokebola.hasMany(Pokemon)
Pokemon.belongsTo(Pokebola)

sequelize.sync({
    force: false,
    alter: true
}).then(() => {
    console.log("Todas as tabelas foram sincronizadas com sucesso.");
}) 


export default {
    Pokemon,
    Pokebola,
    User
}