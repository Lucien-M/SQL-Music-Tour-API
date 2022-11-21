//DEPENDENCIES
const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = new Sequelize(process.env.PG_URI);

// MODEL
class Set_Time extends Model {}

Set_Time.init(
  {
    event_id: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    stage_id: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    band_id: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    start_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    end_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    event_id: {
      type: DataTypes.INTEGER,
      primarykey: true,
      autoIncrement: true
    }
  },
  {
    sequelize,
    modelName: "Set_Time",
    tableName: "set_time",
    timestamps: false
  }
);

// EXPORT
module.exports = Set_Time;
