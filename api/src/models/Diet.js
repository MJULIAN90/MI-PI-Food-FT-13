const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("diet", {
    Id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
    },
    Name: { type: DataTypes.STRING, allowNull: false },
  });
};
