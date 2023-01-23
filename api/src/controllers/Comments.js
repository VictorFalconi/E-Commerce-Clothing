const { commentsModel } = require('../models/index');

const getComments = async(req, res, next) => {
    try{
        const response = await commentsModel.find({})
        const comments = response?.map( C => {
            const mess = {
                id: C._id,
                name: C.name,
                email: C.email,
                message: C.message
            }
            return mess;
        })
        if(comments.length > 0){
            res.status(200).send(comments)
        }
        else { 
            res.status(200).json({ msg: "No comments yet"})
        }
    } catch (error){
        next(error)
    }
}

const createComments = async(req, res) => {
    try{
        const {name, email, message} = req.body

        if(message){
            await commentsModel.create({
                name,
                email,
                message
            })
            res.status(201).send('Comment successfully created')

        } else res.status(406).send("There isn't comment to save")

    } catch (error) {
        console.log('Error sending the comment');
        next(error)
    }
}

module.exports = {
    getComments,
    createComments
}

