'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Countries extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Users.hasMany(models.MODELNAME3, {as: 'State', foreignKey: 'country_id'})
      Users.hasMany(models.MODELNAME3, {as: 'Profiles', foreignKey: 'country_id'})
    }
  }
  Countries.init({
    id_country: DataTypes.INTEGER,
    name_country: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Countries',
  });
  return Countries;
};