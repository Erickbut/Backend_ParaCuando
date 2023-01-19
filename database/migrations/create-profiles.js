'use strict'
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Profiles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4,
        type: Sequelize.UUID 
      },
      user_id: {
        allowNull: false,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        foreignKey: true,
        references: {
          model: 'Users',
          key: 'id'
        },
        type: Sequelize.UUID 
      },
      role_id: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.BIGINT
      },
      country_id: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.BIGINT
      },
      image_url : {
        allowNull: false,
        type: Sequelize.STRING
      },
      code_phone: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      phone: {
        allowNull: false,
        type: Sequelize.INTEGER
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
  down: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction()
    try {
      await queryInterface.dropTable('Profiles', { transaction })
      await transaction.commit()
    } catch (error) {
      await transaction.rollback()
      throw error
    }
  }
}