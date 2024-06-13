const express = require('express');
const zod = require('zod');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

const app = express();
const port = process.env.port || 3002;
const jwtPassword = "3456789";
const CONNECTION_URL = 'mongodb+srv://ss989108:gkFIAwntJ6Vh9rZu@bookstore.ibvbncc.mongodb.net/user_app?retryWrites=true&w=majority'

app.use(express.json());

// Create database model
const user = mongoose.model('user', {
    name: String,
    email: String,
    password: String
}, 'user_table');


app.post('/signup', async(req, res) =>{
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;

    const existingUser = await user.findOne({email: username});
    if (existingUser){
        return res.status(400).send('Username is already existing. Please try again');
    } 
    const userData = new user({
        email: username,
        password: password,
        name: name
    })
    console.log(userData);
    userData.save().then(() =>{
        res.json({
            "msg": "User created successfully"
        })    
    })

})


mongoose.connect(CONNECTION_URL)
    .then(() =>{
        app.listen(port, () =>{
            console.log(`Server running on ${port}`);
        })
    })
    .catch((error) =>{
        console.error(error);
    })
