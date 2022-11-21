//DEPENDENCIES;
const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = new Sequelize(process.env.PG_URI);

// MODEL
class Stage_Event extends Model {}

Stage_Event.init(
  {
    stage_event_id: {
      type: DataTypes.INTEGER,
      primarykey: true,
      autoIncrement: true
    },
    stage_id: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    event_id: {
      type: DataTypes.SMALLINT,
      allowNull: false
    }
  },
  {
    sequelize,
    modelName: "Stage_Event",
    tableName: "stage_event",
    timestamps: false
  }
);

// EXPORT
module.exports = Stage_Event;
