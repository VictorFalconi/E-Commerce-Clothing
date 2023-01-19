const express = require('express');
const { createUser, getAllUsers, deleteUser, updateUser, getUserById } = require('../controllers/User');
const { userModel } = require('../models/index')

const router = express.Router();

router.post('/user', createUser);
router.get('/user', getAllUsers);
router.get('/user/:id', getUserById)
router.delete('/user/:id', deleteUser)
router.put('/user/:id', updateUser)

router.put("/user/active/:id",(req, res) => {
    const { id } = req.params;
    const { active } = req.body;
    userModel
    .updateOne({_id: id}, {$set: { active }})
    .then((data)=>res.json(data))
    .catch((err)=> res.json({message: err}));
});


module.exports = router;