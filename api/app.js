require('dotenv').config();
const express = require('express');
const app = express();

const connectDB = require('./db/connect');
const groceryItemRouter = require('./routes/groceryItemRoute');

app.use('/api/v1/grocery-items', groceryItemRouter);

const port = process.env.PORT || 3000;

const start = async () => {
    try {
        // connectDB
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => console.log(`Server is listening on port ${port}`));
    } catch (error) {
        console.log(error);
    }
};

start();