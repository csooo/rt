const express = require('express');
const app = express();
const cors = require('cors')
app.use(cors())
const port = 5000;
app.use(express.json());
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://password:SHpq6uDbAKJNNxB2@cluster0.yxevysz.mongodb.net/?retryWrites=true&w=majority');

const User = mongoose.model('User', new mongoose.Schema({
    count: {
        type: Number,
    },
    content: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now,
    },
}));
app.get('/'), async (req, res) => {
        res.status(201).send({ message: 'User added successfully');
    });
app.post('/', async (req, res) => {
    const {count,content} = req.body
    console.log(count,content)
    try {
        // Create a new user with the provided data
        const newUser = new User({
            count: count,
            content: content,
        });

        // Save the user to the database
        const savedUser = await newUser.save();

        // Log the saved user details
        console.log('User saved:', savedUser);

        // Send a response
        res.status(201).send({ message: 'User added successfully', user: savedUser });
    } catch (error) {
        console.error('Error adding user:', error);
        res.status(500).send({ message: 'Internal Server Error' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
