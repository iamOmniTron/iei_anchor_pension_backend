const CallToAction = require("../models").CallToAction;

module.exports = {
    getCTA : async (req,res,next)=>{
        try{
            const {id} = req.params;
            const cta = await CallToAction.findOne({where:{id}});
            return res.json({
                success:true,
                data:cta
            })
        }catch(err){
            next(err);
        }
    },
    editCTA: async (req,res,next)=>{
        try{
            const {id} = req.params;
            const data = {
                sectionImage:url,...req.body
            }
            const isUpdated = await CallToAction.update({...data},{where:{id}});
            if(!isUpdated){
                return next("cannot update widget");
            }
            return res.json({
                success:true,
                message:"widget updated successfully"
            })
        }catch(err){
            next(err);
        }
    }
}