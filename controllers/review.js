const Review = require("../models").Review;

module.exports = {
    createReview : async (req,res,next)=>{
        try{
            const isSaved = await Review.create({...req.body});
            if(!isSaved){
                return next("cannot make review");
            }
            return res.json({
                success:true,
                message:"reviewed successfully"
            })
        }catch(err){
            next(err);
        }
    },
    getReviews : async (req,res,next)=>{
        try{
            const reviews = await Review.findAll();
            return res.json({
                success:true,
                data:reviews
            })
        }catch(err){
            next(err);
        }
    }
}