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
        const result = await newUser.save().then((data) => res.json(data));
        // res.status(200).json(result)
    }else{
        res.status(400).json('No se cumplio if')
    }
    
    }catch(err){
        res.status(400).json(err)
    }
}

const deleteUser = async (req, res) => {
    const { id } = req.params;
    userModel.deleteOne({ _id: id }).then((data)=>res.json(data)).catch((err)=>res.json({ message: err }))
    
}

const updateUser = async (req,res) =>{
    const { id } = req.params;
    const { active } = req.body;
    userModel.findByIdAndUpdate(id, {
        active: active
    },{new: true}).then((data)=> res.status(200).json(data))
    //userModel.updateOne({_id: id},{$set:{active}}).then((data)=>res.json(data)).catch((err)=> res.json({message: err}))
}

const getAllUsers = async (req, res) => {
    try{
        const { name } = req.query;
        const allUsers = await userModel.find({});
    if(allUsers){

        if(name){

            const user = allUsers.filter((p)=>p.full_name.toLowerCase().includes(name.toLowerCase()))
            user? res.status(200).json(user) : res.json('Not Found')
        }else{
            res.status(200).json(allUsers)
        }        
    }else { 
        res.status(400).json('Request error!')
    }
    }catch(err){
        res.status(400).json('mal ahi')
    }
    
}

const getUserById = async (req,res)=>{
    const { id } = req.params;
    userModel.findById(id).then((data)=>res.json(data)).catch((err)=>res.json({message: err}));
}
module.exports = {
    createUser,
    getAllUsers,
    deleteUser,
    updateUser,
    getUserById
}
