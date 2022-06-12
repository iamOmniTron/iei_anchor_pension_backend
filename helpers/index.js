require("dotenv").config();
const {sign} = require("jsonwebtoken");
const SECRET = process.env.SECRET;
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: (req,file,done)=>done(null,"./public/images"),
    filename: (req,file,done)=> done(null,`${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`)
})

module.exports = {
    signToken : (payload)=>{
        return sign(payload,SECRET,{expiresIn:"1d"});
    },
    upload:multer({
        storage
    })
}

