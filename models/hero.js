"use strict";


module.exports = (sequelize,DataTypes)=>{
    const Hero = sequelize.define("Hero",{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        },
        bgImage:{
            type:DataTypes.STRING
        },
        headline:{
            type:DataTypes.STRING
        },
        subText:{
            type:DataTypes.STRING
        }
    },{
        freezeTableName:true,
        timestamps:true
    })

    return Hero;
}