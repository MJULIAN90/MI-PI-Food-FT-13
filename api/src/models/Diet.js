const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("diet", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    Name: { type: DataTypes.STRING, allowNull: false },
  });
};
