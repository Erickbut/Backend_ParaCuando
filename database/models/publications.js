'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Publications extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Users.hasOne(models.MODELNAME2, {as: 'Profiles', foreignKey: 'publication_id'})
      Users.hasOne(models.MODELNAME2, {as: 'Publications_types', foreignKey: 'publication_id'})
      Users.hasOne(models.MODELNAME2, {as: 'Cities', foreignKey: 'publication_id'})

      Users.hasMany(models.MODELNAME3, {as: 'Profiles', foreignKey: 'votes_id'})


    }
  }
  Publications.init({
    id_country: DataTypes.INTEGER,
    name_country: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Publications',
  });
  return Publications;
};