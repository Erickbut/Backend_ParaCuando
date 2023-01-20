'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Votes', {
      votes_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
        type: Sequelize.UUID 
      },
      id_country: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        foreingKey: true,
        references: {
          model: 'Countries',
          key: 'id'
        },
      },
      publication_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        foreingKey: true,
        references: {
          model: 'Publications',
          key: 'id'
        },
        defaultValue: Sequelize.UUIDV4,
        type: Sequelize.UUID ,
      },
      profile_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
        type: Sequelize.UUID,
        references: {
          model: 'Profiles',
          key: 'profile_id'
        },
      },
      name_country: {
        type: Sequelize.STRING,
        allowNull: false
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
    await queryInterface.dropTable('Votes')
  }
}