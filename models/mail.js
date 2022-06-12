

module.exports = (sequelize,DataTypes)=>{
    const Mail = sequelize.define("Mail",{
        id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true,
            allowNull:false
        },
        fullname:{
            type:DataTypes.STRING,
        },
        email:{
            type:DataTypes.STRING
        },
        message:{
            type:DataTypes.TEXT
        }
    },{
        freezeTableName:true,
        timestamps:true
    });

    return Mail;
}