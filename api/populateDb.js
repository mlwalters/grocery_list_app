require('dotenv').config()

const connectDB = require('./db/connect')
const GroceryItem = require('./models/groceryItemModel')

const jsonGroceries = require('./groceryItems.json')

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        await GroceryItem.deleteMany()
        await GroceryItem.create(jsonGroceries)
        console.log('Successfully updated MongoDB')
        process.exit(0)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

start();