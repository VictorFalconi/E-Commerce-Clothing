const express = require('express');
const { createUser, getAllUsers } = require('../controllers/User');

const router = express.Router();

router.post('/user', createUser);
router.get('/user', getAllUsers);


module.exports = router;