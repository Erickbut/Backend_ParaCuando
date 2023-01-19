'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Profiles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Profiles.belongsTo(models.MODELNAME1, {as: 'Users', foreignKey: 'user_id'})
      Profiles.belongsTo(models.MODELNAME1, {as: 'Roles', foreignKey: 'role_id'})
      Profiles.belongsTo(models.MODELNAME1, {as: 'Countries', foreignKey: 'country_id'})
      
      Profiles.hasMany(models.MODELNAME3, {as: 'Publications', foreignKey: 'publication_type_id'})

    }
  }
  Profiles.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Profiles',
  });
  return Profiles;
};