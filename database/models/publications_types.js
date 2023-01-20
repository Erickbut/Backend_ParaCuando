'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Publications_types extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Users.hasMany(models.MODELNAME3, {as: 'Publications', foreignKey: 'publication_type_id'})

    }
  }
  Publications_types.init({
    id_country: DataTypes.INTEGER,
    name_country: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Publications_types',
  });
  return Publications_types;
};