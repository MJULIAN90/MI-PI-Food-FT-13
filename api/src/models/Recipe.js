const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("recipe", {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    summary: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    Puntuation: { type: DataTypes.INTEGER },
    lvl_healthScore: { type: DataTypes.INTEGER },
    instructions: { type: DataTypes.TEXT },
    image: { type: DataTypes.TEXT },
  });
};
