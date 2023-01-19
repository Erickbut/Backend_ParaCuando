'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      
    }
  }
  Users.init({
    //id: DataTypes.BIGINT, este o el de abajo
    id: DataTypes.UUID,
    primaryKey:true,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    
    email:{
    type: DataTypes.EMAIL,
    allowNull:false,
    validate:{
      isEmail:true
    }
    },
    username: DataTypes.STRING,
    password : {
      allowNull: false,
      type: DataTypes.STRING  
    },
    email_verified:{
      allowNull: false,
      type: DataTypes.DATE,
    },
    token:{
      type: DataTypes.STRING  ,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};