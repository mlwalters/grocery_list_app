const mongoose = require('mongoose')

const groceryItemSchema = new mongoose.Schema({
    itemName: {
        type: String,
        required: [true, 'Name is required'],
        min: [2, 'Too short'],
        min: [50, 'Too long']
    },
    category: {
        type: String,
        enum: ['fruits and veggies', 'canned goods', 'dairy or dairy subs', 'meat', 'seafood', 'deli', 'bread and pastries', 'condiments and spices', 'snacks', 'others'],
        required: [true, 'Please choose a category'],
        message: '{VALUE} is not an option',
    },
    isChecked: {
        type: Boolean,
        default: false
    },
    notes: {
        type: String,
        min: [2, 'Too short'],
        min: [50, 'Too long']
    },
})

module.exports = mongoose.model('GroceryItem', groceryItemSchema)
