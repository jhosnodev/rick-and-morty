const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primartKey: true,
      },
      email: {
         type: DataTypes.TEXT,
         allowNull: false,
         primartKey: true,
      }
    },
    { timestamps: false }
  );
};
