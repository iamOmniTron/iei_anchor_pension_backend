const Mail = require("../models").Mail;


module.exports = {
    sendMail : async (req,res,next)=>{
        try{
            const isSaved = await Mail.create({...req.body});
            if(!isSaved){
                return next("cannot send mail");
            }
            return res.json({
                success:true,
                message:"mail sent successfully"
            })
        }catch(err){
            next(err);
        }
    },
    getMails : async (req,res,next)=>{
        try{
            const mails = await Mail.findAll();
            return res.json({
                success:true,
                data:mails
            })
        }catch(err){
            next(err);
        }
    }
}