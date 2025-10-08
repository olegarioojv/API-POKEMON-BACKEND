import { DataTypes } from "@sequelize/core";
import sequelize from "../../config/database.js";

const Pokemon = sequelize.define('Pokemon', {
    name:
    {
        type: DataTypes.STRING,
        allowNull: false
    },
    nature: 
    {
        type: DataTypes.STRING,
        allowNull: false
    },
    tipo:
    {
        type: DataTypes.STRING,
        allowNull: false
    },
    sexo:
    {
        type: DataTypes.STRING,
        allowNull: false
    },
    level:
    {
        type: DataTypes.DECIMAL(10,3),
        allowNull: false
    }
});

export default Pokemon;

