const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}
ProductTag.init({
  //   define columns
 id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
    
    },
 producttag_id: {
   type: DataTypes.STRING,
   allowNull: false,
 },
 tag_id:
 {
  type: DataTypes.INTEGER,
 }



  
   

 },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'producttag',
  }
);

module.exports = ProductTag;
