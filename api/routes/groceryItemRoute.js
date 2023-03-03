const express = require('express')
const router = express.Router()

const {
    getAllGroceryItems,
} = require('../controllers/groceryItemController')

router.route('/').get(getAllGroceryItems)

module.exports = router
