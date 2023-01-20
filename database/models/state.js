'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class State extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      State.hasOne(models.MODELNAME4, {as: 'countries', foreignKey: 'country_id'})
      State.hasMany(models.MODELNAME3, {as: 'Cities', foreignKey: 'state_id'})

    }
  }
  State.init({
    id_country: DataTypes.INTEGER,
    name_country: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'State',
  });
  return State;
};