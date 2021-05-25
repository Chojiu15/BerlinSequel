"use-strict";

module.exports = (sequelize, DataTypes) => {
  const Owner = sequelize.define("Owner", {
      first_name : DataTypes.STRING,
      last_name : DataTypes.STRING,
      age : DataTypes.INTEGER
  }, {
      timestamps : false
  });

  return Owner
};


