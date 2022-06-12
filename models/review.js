

module.exports = (sequelize,DataTypes)=>{
    const Review = sequelize.define("Review",{
        id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            allowNull:false,
            primaryKey:true
        },
        reviewer:{
            type:DataTypes.STRING,
        },
        review:{
            type:DataTypes.STRING,
        },
        occupation:{
            type:DataTypes.STRING
        }
    },{
        freezeTableName:true,
        timestamps:true
    });

    return Review;
}