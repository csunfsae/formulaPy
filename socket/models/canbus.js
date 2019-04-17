'use strict';
module.exports = (sequelize, DataTypes) => {
  const Canbus = sequelize.define('Canbus', {
    can_id: DataTypes.INTEGER,
    can_data: DataTypes.STRING,
    device: DataTypes.STRING
  }, {});
  Canbus.associate = function(models) {
    // associations can be defined here
  };
  return Canbus;
};