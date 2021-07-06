const SequelizeSlugify = require("sequelize-slugify");

module.exports = (sequelize, DataTypes) => {
  const Treasure = sequelize.define("Treasure", {
    name: { type: DataTypes.STRING, allowNull: false },
    slug: {
      type: DataTypes.STRING,
      unique: true,
    },
    isTreasure: { type: DataTypes.BOOLEAN },
    // image: DataTypes.STRING,
  });
  SequelizeSlugify.slugifyModel(Treasure, { source: ["name"] });

  return Treasure;
};
