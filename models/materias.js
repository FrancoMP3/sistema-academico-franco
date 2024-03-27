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
      semestre: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      fk_profesor: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "profesores", 
          key: "id" 
        }
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
      tableName: "profesores",
    }
  );

  profesor.getProfesores = async (params) => {
    const query = `SELECT * FROM profesores`; // Consulta para recuperar todos os professores
    return await sequelize.query(query, {
      type: sequelize.QueryTypes.SELECT,
    });
  };

  profesor.associate = function (models) {
    // Aqui você pode definir associações com outros modelos, se necessário
    // Por exemplo:
    // profesor.hasMany(models.materias, {
    //   foreignKey: "fk_materia",
    //   as: "materias",
    // });
  };

  return profesor;
};
