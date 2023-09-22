const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Shopping extends Model {}

Shopping.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING,
    },
    style: {
      type: DataTypes.STRING,
      defaultValue: DataTypes.NOW,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'shopping',
  }
);

module.exports = Shopping;