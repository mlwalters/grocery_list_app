const GroceryItem = require('../models/groceryItemModel');

const getAllGroceryItems = async (req, res) => {
    const { itemName, category, isChecked, notes } = req.query;
    const queryObject = {};

    // so is this like the viewmodel
    queryObject.itemName = itemName;
    queryObject.category = category;
    queryObject.isChecked = isChecked;
    if (notes) {
        queryObject.notes = notes;
    }
    let result = GroceryItem.find(queryObject);
    const groceryItems = await result;
    res.status(200).json({ groceryItems, numberOfItems: groceryItems.length });
}

module.exports = {
    getAllGroceryItems,
};