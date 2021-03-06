const Info = require("../models").Info;

module.exports = {
    getInfo : async (req,res,next)=>{
        try{
            const {id} = req.params;
            const hero = await Info.findOne({where:{id}});
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
    editInfo : async (req,res,next)=>{
        try{
            const {id} = req.params;
            let url = req.file.filename;
            const data = {
                image:url,...req.body
            }
            const isUpdated = await Info.update({...data},{where:{id}});
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