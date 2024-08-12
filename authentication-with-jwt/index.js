const express = require('express');
const zod = require('zod');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.port || 3000;
const jwtPassword = "3456789";
const CONNECTION_URL = process.env.DATABASE_URL;

app.use(express.json());

// Create database model
const user = mongoose.model(user, {
    name: String,
    email: String
});



function userExists(username, password){
    // write logic to return true or false if this user exists in allUser array
    for(let i=0; i<allUser.length; i++){
        if (allUser[i].username == username && allUser[i].password == password){
            return true;
        }
        else{
            return false;
        }
    }
}


app.post("/signin", (req, res) =>{
    const username = req.body.username;
    const password = req.body.password;

    if (!userExists(username, password)){
        return res.status(403).json({
            msg: "User don't exist in our company",
        });
    }
    
    var token = jwt.sign({username: username}, jwtPassword);
    return res.json({
        token,
    });
})

app.get('/user', (req, res) =>{
    const token = req.headers.authorization;
    try {
        const decoded = jwt.verify(token, jwtPassword);
        const username = decoded.username;
        // return a list of users other than this username
        res.json({
            users: allUser.filter((value) =>{
                if(value.username == username){
                    return false;
                }
                else{
                    return true;
                }
            })
        })
    } catch (error) {
        console.error(error);
        res.status(403).json({
            msg: "Invalid token",
        })
    }
})


app.use((error, req, res, next) =>{
    console.error(error);
    res.status(500).send('An internal server error occurred');
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



/* 
    As you can tell by now, anyone can send requests to your backend. They can just go to postman and send a request. How do you ensure that this user has access to a
    certain resource?

    Slightly better way-
    1. Give the user back a token on signup/signin
    2. Ask the user to send back the token in all future requests
    3. When the user logs out, ask the user to forget the token (or revoke it from the backend) 
*/

/* 
    1. Create sign-in and sign-out with jwt.
    2. Create add user, delete user, and update user routes with jwt.
    3. Add Rate limit and Server hit count with time duration.
    4. Implementing the middleware.
*/