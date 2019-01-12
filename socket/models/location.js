module.exports = (sequelize, DataTypes) => {
  const Location = sequelize.define('Location', {
    lat: DataTypes.INTEGER,
    long: DataTypes.INTEGER,
    cell_id: DataTypes.STRING,
    time: DataTypes.DATE,
  }, {});
  // Location.associate = function (models) {
  // };
  return Location;
};