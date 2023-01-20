'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Publications', {
      publication_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
        type: Sequelize.UUID 
      },
      profile_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
        type: Sequelize.UUID,
        references: {
          model: 'Profiles',
          key: 'id'
        }
      },
      publication_type_id:{
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      city_id: {
        allowNull: false,
        type: Sequelize.STRING,
        references: {
          model: 'Cities',
          key: 'id'
        }
      },
      votes_id: {
        allowNull: false,
        type: Sequelize.STRING,
        references: {
          model: 'Votes',
          key: 'id'
        }
      },
      tittle:{
        allowNull: false,
        type: Sequelize.STRING
      },
      description:{
        allowNull: false,
        type: Sequelize.STRING
      },
      content:{
        allowNull: false,
        type: Sequelize.TEXT
      },
      picture:{
        allowNull: false,
        type: Sequelize.STRING
      },
      image_url:{
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
    await queryInterface.dropTable('Publications')
  }
}