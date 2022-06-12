

module.exports = (sequelize,DataTypes)=>{
    const Info = sequelize.define("Info",{
        id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            allowNull:false,
            primaryKey:true
        },
        headline:{
            type:DataTypes.STRING,
        },
        image:{
            type:DataTypes.STRING
        },
        text:{
            type:DataTypes.STRING
        }
    },{
        freezeTableName:true,
        timestamps:true
    });

    return Info;
}