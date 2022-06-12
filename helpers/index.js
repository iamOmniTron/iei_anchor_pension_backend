require("dotenv").config();
const {sign} = require("jsonwebtoken");
const SECRET = process.env.SECRET;

module.exports = {
    signToken : (payload)=>{
        return sign(payload,SECERT,{expiresIn:"1d"});
    }
}