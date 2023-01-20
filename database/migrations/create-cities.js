'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Cities', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
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
      publication_id:{
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.BIGINT,
        references: {
          model: 'Publications',
          key: 'id'
        }
      },
      name_city: {
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
    await queryInterface.dropTable('Cities')
  }
}