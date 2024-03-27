"use strict";

const { QueryTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const profesor = sequelize.define(
    "profesor",
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
      correo: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      password: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      fk_estudiante: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "estudiante", 
          key: "id"
        }
      },
    },
    {
      timestamps: false,
      tableName: "profesores",
    }
  );

  profesor.getProfesores = async (params) => {
    const query = ``; // Agrega tu consulta aquí
    return await sequelize.query(query, {
      type: sequelize.QueryTypes.SELECT,
    });
  };

  profesor.associate = function (models) {
    // Define las asociaciones con otros modelos, si es necesario
    // Por ejemplo:
    // profesor.hasMany(models.materias, {
    //   foreignKey: "fk_materia",
    //   as: "materias",
    // });
  };

  return profesor;
};
