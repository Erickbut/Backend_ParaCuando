'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Publications_types', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      publication_id: {
        allowNull: false,
        primaryKey: true,
        foreingKey: true,
        references: {
          model: 'Publications',
          key: 'id'
        },
        defaultValue: Sequelize.UUIDV4,
        type: Sequelize.UUID 
      },
      profile_id: {
        allowNull: false,
        primaryKey: true,
        foreingKey: true,
        references: {
          model: 'Profiles',
          key: 'id'
        },
        defaultValue: Sequelize.UUIDV4,
        type: Sequelize.UUID 
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
    await queryInterface.dropTable('Publications_types')
  }
}