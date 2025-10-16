import { DataTypes } from '@sequelize/core'
import sequelize from '../../config/database.js'

const Pokebola = sequelize.define('Pokebola', {
  pokebola: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

export default Pokebola
