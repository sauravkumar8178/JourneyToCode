const express = require('express');

const app = express();
const port = 3002;

app.use(express.json());

// User Authentication by username and password
function userAuth(req, res, next){
    const username = req.headers.username;
    const password = req.headers.password;

    if(username != 'saurav' || password != 'pass'){
        res.status(403).json({
            msg: "Username and Password are incorrect. Please try again!"
        })
    }
    else{
        next();
    }
}

// Kidney validation
function kidneyAuth(req, res, next){
    const kidneyId = req.query.kidneyId;

    if (kidneyId != 1 && kidneyId != 2){
        res.status(411).json({
            msg: 'wrong input please try again...!'
        })
    }
    else{
        next();
    }
}

// Checking number of request in server
let numberOfRequest = 0;
function calculateRequest(req, res, next){
    numberOfRequest++;
    console.log(numberOfRequest);
    next();
}


app.get('/health-checkup', userAuth, kidneyAuth, calculateRequest, (req, res) =>{
    res.send("Your heart is healthy");  
})


// Use the calculateRequest function as middleware for all routes
app.use(calculateRequest);

app.get('/first-checkup', userAuth, kidneyAuth, (req, res) =>{
    res.send("Your heart is healthy");  
})


app.get('/second-checkup', userAuth, kidneyAuth, (req, res) =>{
    res.send("Your heart is healthy");  
})


app.get('/third-checkup', userAuth, kidneyAuth, (req, res) =>{
    res.send("Your heart is healthy");  
})


app.listen(port, () =>{
    console.log(`Port Listen on ${port}`);
})



/*
    Practics Question
    1. Count the number of requests.
    2. Find the average time your server taking to handle request. 
*/