'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cities extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Cities.belongsTo(models.MODELNAME2, {as: 'States', foreignKey: 'state_id'})
      Cities.hasMany(models.MODELNAME3, {as: 'Publications', foreignKey: 'publication_id'})
      
    }
  }
  Cities.init({
    id_country: DataTypes.INTEGER,
    name_country: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Cities',
  });
  return Cities;
};