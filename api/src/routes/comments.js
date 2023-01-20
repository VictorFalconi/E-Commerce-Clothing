const express = require('express');
const { getComments, createComments } = require('../controllers/Comments');

const router = express.Router();

router.get('/comments', getComments);
router.post('/comments', createComments);

module.exports = router;
