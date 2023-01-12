const express = require('express');
const { createUser, getAllUsers, deleteUser, updateUser, getUserById } = require('../controllers/User');

const router = express.Router();

router.post('/user', createUser);
router.get('/user', getAllUsers);
router.get('/user/:id', getUserById)
router.delete('/user/:id', deleteUser)
router.put('/user/:id', updateUser)


module.exports = router;