const Showcase = require("../models").Showcase;

module.exports = {
    getShowcase : async (req,res,next)=>{
        try{
            const {id} = req.params;
            const hero = await Showcase.findOne({where:{id}});
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
    editShowcase : async (req,res,next)=>{
        try{
            const {id} = req.params;
            const isUpdated = await Showcase.update({...req.body},{where:{id}});
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