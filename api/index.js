const express = require('express');
const app = express();
const cors = require('cors')
app.use(cors())
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
    res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
        res.json({ 'message': 'User added successfully'});
    }
app.post('/', async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
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
app.listen(8080 || process.env.PORT, function() {
    console.log('Example app listening on port 3000!');
});
