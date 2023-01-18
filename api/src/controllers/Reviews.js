const { reviewsModel } = require('../models/index')

const Reviews = async (req, res, next) => {
    const { productId, userId } = req.query;
    const allReviews = await reviewsModel.find({});
    // console.log(allReviews)
    try {
        if (productId) {
            const filter = allReviews.filter(f => f.productId === productId)
            if (filter.length) {
                res.status(200).json(filter)
            } else {
                res.status(400).json({ msj: 'Review not found' })
            }
        } else if (userId) {
            const filter = allReviews.filter(f => f.userId === userId)
            if (filter.length) {
                res.status(200).json(filter)
            } else {
                res.status(400).json({ msj: 'Review not found' })
            }
        }
        else {
            if (allReviews) {
                return res.status(200).json(allReviews);
            } else {
                return res.status(400).json({ msj: 'Something went wrong' })
            }
        }
    } catch (error) {
        console.log(error)
        next(error)
    }
}

const CreateReview = async(req, res) => {
    const {userId, score, comment, productId} = req.body;
    try{
        const newReview = new reviewsModel({
            userId: userId,
            score: score,
            comment: comment,
            productId: productId
        })
        const review = await newReview.save();
        console.log(review)
        return res.status(200).json({msj: 'Review successfully created'})
    } catch(error){
        console.log({msg:'no sepudo'})
    }
}

const UpdateReview = async(req, res) => {
    const { id } = req.params;
    const {
        score,
        comment,
    } = req.body;
    if(!score || !comment){
        res.status(400).json({msg: 'All fields are required'})
    }else {
        try{
            await reviewsModel.findByIdAndUpdate(
                id, 
                {
                    score,
                    comment
                },
                {new:true}
                )
                .then(() => {
                    res.status(200).json({msj: 'Review updated successfully'})
                })
        }catch(err){
            console.log(err)
            res.status(400).json({msj: 'Review did not update correctly'})
        }
    }
}

module.exports = {
    Reviews,
    CreateReview,
    UpdateReview
}