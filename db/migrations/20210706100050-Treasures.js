"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Treasures", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },

      name: { type: Sequelize.STRING, allowNull: false },

      slug: {
        type: Sequelize.STRING,
        unique: true,
      },
      isTreasure: { type: Sequelize.BOOLEAN },
      // image: Sequelize.STRING,

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Treasures");
  },
};
