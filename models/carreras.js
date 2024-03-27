"use strict";

const { QueryTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const carrera = sequelize.define(
    "carrera",
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
    },
    {
      timestamps: false,
      tableName: "carreras",
    }
  );

  carrera.getCarreras = async (params) => {
    const query = ``; // Adicione sua consulta aqui
    return await sequelize.query(query, {
      type: sequelize.QueryTypes.SELECT,
    });
  };

  carrera.associate = function (models) {
    // Defina associações com outros modelos, se necessário
    // Por exemplo:
    // carrera.hasMany(models.materias, {
    //   foreignKey: "fk_materia",
    //   as: "materias",
    // });
  };

  return carrera;
};
