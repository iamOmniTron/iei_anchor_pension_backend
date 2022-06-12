const express = require("express");
const app = express();
const cors = require("cors");
const sequelize = require("./models").sequelize;
const router = require("./routes");
const chalk = require("chalk");
const seedDB = require("./seeders/landing");


(async()=>{
    try{
        console.log(chalk.blue.bold('\n Connecting to database...'));
        await sequelize.authenticate();
        console.log(chalk.blue.bold('\n Connection Established, awaiting synchronization...'));
        await sequelize.sync({force:true});
        console.log(chalk.blue.bold("\n database synchorized successfully"))
        await seedDB();
    }catch(err){
        console.log("Error:",err.message);
    }
})()

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use(express.static("./public"))
app.use("/",router);
app.use("/",(err,req,res,next)=>{
    console.log(err)
    if(err instanceof Error){
        return res.json({
            success:false,
            error:err.message
        });
    }
    return res.json({
        success:false,
        error:err
    })
});


module.exports = app;