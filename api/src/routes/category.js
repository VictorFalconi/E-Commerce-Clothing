const express = require('express');
const { allCategories, createCategory } = require('../controllers/Category')

const router = express.Router()

router.get('/category', allCategories)
router.post('/category', createCategory)




module.exports = router;