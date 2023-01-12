const express = require('express');
const {
    Reviews,
    CreateReview,
    UpdateReview
} = require('../controllers/Reviews.js')

const router = express.Router();

router.get('/reviews', Reviews)
router.post('/reviews', CreateReview)
router.put('/reviews', UpdateReview)

module.exports = router;




