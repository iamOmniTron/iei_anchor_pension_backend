

module.exports = (sequelize,DataTypes)=>{
    const NavMenu = sequelize.define("NavMenu",{
        id:{
            type:DataTypes.INTEGER,
            primaryKey:true
        },
    },{
        freezeTableName:true
    });

    return NavMenu;
}