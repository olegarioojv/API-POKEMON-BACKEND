import sequelize from '../config/database.js';
import Pokemon from './pokemon/Pokemon.js';

sequelize.sync({
    force: false,
    alter: true
}).then(() => {
    console.log("Todas as tabelas foram sincronizadas com sucesso.");
}) 


export default {
    Pokemon
}