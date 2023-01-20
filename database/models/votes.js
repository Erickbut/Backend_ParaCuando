'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Votes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Votes.belongsTo(models.MODELNAME1, {as: 'Publications', foreignKey: 'publication_id'})
      Votes.belongsTo(models.MODELNAME1, {as: 'Profiles', foreignKey: 'profile_id'})

    }
  }
  Votes.init({
    id_country: DataTypes.INTEGER,
    name_country: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Votes',
  });
  return Votes;
};