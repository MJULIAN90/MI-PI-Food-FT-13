const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("recipe", {
    Id: { type: DataTypes.UUID, primaryKey: true, allowNull: false },
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
