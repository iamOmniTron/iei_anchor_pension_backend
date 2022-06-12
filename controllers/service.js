const Service = require("../models").Service;

module.exports = {
    createService : async (req,res,next)=>{
        try{
            const isCreated = await Service.create({...req.body});
            if(!isCreated){
                return next("cannot add widget")
            }
            return res.json({
                success:true,
                message:"widget added successfully"
            })
        }catch(err){    
            next(err);
        }
    },
    getServices : async (req,res,next)=>{
        try{
            const services = await Service.findAll();
            return res.json({
                success:true,
                data:services
            });
        }catch(err){
            next(err);
        }
    },
    editService: async (req,res,next)=>{
        try{
            const {id} = req.params;
            const isUpdated = await Service.update({...req.body},{where:{id}});
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
    },
    deleteService : async (req,res,next)=>{
        try{
            const {id} = req.params;
            const isDeleted = await Service.destroy({where:{id}});
            if(!isDeleted){
                return next("cannot delete widget");
            }
            return res.json({
                success:true,
                message:"widget deleted successfully"
            })
        }catch(err){
            next(err);
        }
    }
}