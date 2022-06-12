"use strict"

module.exports = (sequelize,DataTypes)=>{
    const CallToAction = sequelize.define("CallToAction",{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        },
        title:{
            type:DataTypes.STRING
        },
        paragraph1:{
            type:DataTypes.STRING
        },
        paragraph2:{
            type:DataTypes.STRING
        },
        ctaLinkTitle:{
            type:DataTypes.STRING
        },
        ctaLink:{
            type:DataTypes.STRING
        },
        sectionHeadline:{
            type:DataTypes.STRING
        },
        sectionImage:{
            type:DataTypes.STRING
        },
        sectionParagraph:{
            type:DataTypes.STRING
        }
    },{
        freezeTableName:true,
        timestamps:true
    });

    return CallToAction;
}