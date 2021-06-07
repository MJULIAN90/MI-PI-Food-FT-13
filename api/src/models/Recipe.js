const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("recipe", {
    Id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
    },
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Resumen_del_plato: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    Puntuacion: { type: DataTypes.INTEGER },
    Nivel_de_comida_saludable: { type: DataTypes.INTEGER },
    Paso_a_paso: { type: DataTypes.TEXT },
  });
};
