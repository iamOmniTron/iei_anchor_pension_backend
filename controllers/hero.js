const Hero = require("../models").Hero;


module.exports = {
    getHero : async (req,res,next)=>{
        try{
            const {id} = req.params;
            const hero = await Hero.findOne({where:{id}});
            if(!hero || hero == undefined){
                return next("cannot get data");
            }
            return res.json({
                success:true,
                data:hero
            })
        }catch(err){
            next(err);
        }
    },
    editHero : async (req,res,next)=>{
        try{
            const {id} = req.params;
            const isUpdated = await Hero.update({...req.body},{where:{id}});
            if(!isUpdated){
                return next("cannot confirm changes");
            }
            return res.json({
                success:true,
                message:'changes made successfully'
            });
        }catch(err){
            next(err);
        }
    },
}