"use strict";

const { QueryTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const estudiante = sequelize.define(
    "estudiante",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      nombre: {
        allowNull: false,
        type: DataTypes.STRING(50),
      },
      apellido: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      CI: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      fk_carrera: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "carrera", 
          key: "id" 
        }
      },
    },
    {
      timestamps: false,
      tableName: "estudiantes",
    }
  );

  estudiante.getEstudiantes = async (params) => {
    const query = ``; // Agrega tu consulta aquí
    return await sequelize.query(query, {
      type: sequelize.QueryTypes.SELECT,
    });
  };

  estudiante.associate = function (models) {
    // Define las asociaciones con otros modelos, si es necesario
    // Por ejemplo:
    // estudiante.belongsTo(models.carrera, {
    //   foreignKey: "fk_carrera",
    //   as: "carrera",
    // });
  };

  return estudiante;
};
