//DEPENDENCIES
const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = new Sequelize(process.env.PG_URI);

// MODEL
class Meet_Greet extends Model {}

Meet_Greet.init(
  {
    event_id: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    band_id: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    meet_start_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    meet_end_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    meet_greet_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    }
  },
  {
    sequelize,
    modelName: "Meet_Greet",
    tableName: "meet_greet",
    timestamps: false
  }
);

// EXPORT
module.exports = Meet_Greet;
