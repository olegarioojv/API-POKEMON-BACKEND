import sequelize from '../config/database.js';
import Pokemon from './pokemon/Pokemon.js';
import Pokebola from '../model/pokebolas/Pokebolas.js';
import User from './user/User.js';


// A Pokemon can have many Pokebolas; each Pokebola belongs to a single Pokemon
Pokemon.hasMany(Pokebola);
Pokebola.belongsTo(Pokemon);

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