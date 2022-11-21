// DEPENDENCIES
const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = new Sequelize(process.env.PG_URI);

// MODEL
class Event extends Model {}

Event.init(
  {
    event_id: {
      type: DataTypes.INTEGER,
      primarykey: true,
      autoIncrement: true
    },
    nama: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    modelName: "Event"
  }
);

// EXPORT
module.exports = Event;
