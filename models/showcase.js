

module.exports = (sequelize,DataTypes)=>{
    const Showcase = sequelize.define("Showcase",{
        id:{
            type:DataTypes.INTEGER,
            allowNull:false,
            primaryKey:true,
            autoIncrement:true
        },
        headline:{
            type:DataTypes.STRING,
        },
        item1Title:{
            type:DataTypes.STRING
        },
        item1Image:{
            type:DataTypes.STRING
        },
        item1Subtext:{
            type:DataTypes.TEXT
        },
        item2Title:{
            type:DataTypes.STRING
        },
        item2Image:{
            type:DataTypes.STRING
        },
        item2Subtext:{
            type:DataTypes.TEXT
        },
        item3Title:{
            type:DataTypes.STRING
        },
        item3Image:{
            type:DataTypes.STRING
        },
        item3Subtext:{
            type:DataTypes.TEXT
        }
    },{
        freezeTableName:true,
        timeStamps:true
    });

    return Showcase;
}