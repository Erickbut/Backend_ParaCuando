'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction()
    const { v4: uuid4 } = require('uuid')

    let UUIDV4 = {
      id: uuid4()
    }
    try {
      await queryInterface.createTable('users', {
        user_id: { // usando UUID
          type: Sequelize.UUID,
          allowNull: false,
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true,
          references: {
            model: 'Users',
            key: 'id'
          },
          onDelete: 'RESTRICT',
          onUpdate: 'CASCADE'
        },
        profile_id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          foreingKey:true,
          references:{
            model: 'Profiles',
            key: 'profile_id'
          },
          defaultValue: Sequelize.UUIDV4,
          type: Sequelize.UUID 
        },
        first_name: {
          allowNull: false,
          type: Sequelize.STRING
        },
        last_name: {
          allowNull: false,
          type: Sequelize.STRING
        },
        email: {
          type: Sequelize.STRING,
          unique: true,
          allowNull: false,
          validate: {
            isEmail: true,
            notEmpty: true
          }
        },
        username: {
          allowNull: false,
          type: Sequelize.STRING
        },
        password: {
          allowNull: false,
          type: Sequelize.STRING
        },
        email_verified: {
          allowNull: false,
          type: Sequelize.DATE,
          field: 'verified_at' // --> Asegurense de establecer el campo en snake_case aquí
        },
        token: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
          field: 'created_at' // --> Asegurense de establecer el campo en snake_case aquí
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
          field: 'updated_at'
        }
      }, { transaction })
      await transaction.commit()
    } catch (error) {
      await transaction.rollback()
      throw error
    }
  },
  down: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction()
    try {
      await queryInterface.createTable('Users', {
        id: {
          allowNull: false,
          defaultValue: Sequelize.UUIDV4,
          primaryKey: true,
          type: Sequelize.UUID
        },
      }, { transaction })
      await transaction.commit()
    } catch (error) {
      await transaction.rollback()
      throw error
    }
  }
}