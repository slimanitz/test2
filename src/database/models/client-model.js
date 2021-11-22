const sequelize = require("../db-connection");
const { DataTypes, Model } = require("sequelize");

class Client extends Model {}

Client.init(
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
    descriptionMaxSize: {
      field: "description_max_size",
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    creationDate: {
      field: "creation_date",
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW(),
    },
    updateDate: {
      field: "update_date",
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW(),
    },
  },
  {
    sequelize,
    modelName: "client",
    timestamps: false,
  }
);

module.exports = Client;
