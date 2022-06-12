"use strict"

module.exports = (sequelize,DataTypes)=>{
    const Service = sequelize.define("Service",{
        id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true
        },
        thumbnail:{
            type:DataTypes.STRING,
        },
        href:{
            type:DataTypes.STRING
        },
        linkTitle:{
            type:DataTypes.STRING
        },
        paragraphText:{
            type:DataTypes.STRING
        }
    })

    return Service;
}