const { userModel } = require('../models/index')

const createUser = async (req, res) => {
    try{
        const user = req.body;
    if(user){
        const newUser = new userModel({
            full_name: user.name,
            email: user.email,
            name: user.given_name,
            last_name: user.family_name,
            image: user.picture
        })
        const result = await newUser.save().then((data) => res.json(data)).catch((err) => res.json({ error_code: err.code, message: 'Email address is already registered!' }));
        // res.status(200).json(result)
    }else{
        res.status(400).json('No se cumplio if')
    }
    
    }catch(err){
        res.status(400).json(err)
    }
}

const getAllUsers = async (req, res) => {
    try{
        const allUsers = await userModel.find({});
    if(allUsers){
        res.status(200).json(allUsers)
    }else { 
        res.status(400).json('Request error!')
    }
    }catch(err){
        res.status(400).json(err)
    }
    
}

module.exports = {
    createUser,
    getAllUsers
}
