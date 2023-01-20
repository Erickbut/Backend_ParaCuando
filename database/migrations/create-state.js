'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('States', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      country_id: {
        allowNull: false,
        autoIncrement: true,
        foreingKey: true,
        type: Sequelize.INTEGER ,
        references: {
          model: 'Countries',
          key: 'id'
        }
      },
      state_id: {
        allowNull: false,
        autoIncrement: true,
        foreingKey: true,
        references: {
          model: 'States',
          key: 'id'
        },
        type: Sequelize.INTEGER      
      },
      name_state: {
        allowNull: false,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('States')
  }
}