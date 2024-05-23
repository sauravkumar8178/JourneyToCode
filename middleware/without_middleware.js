const express = require('express');
const app = express();
const port = 3001;

app.use(express.json());

app.get('/health-checkup', (req, res) =>{
    // do health check here
    const kidneyId = req.query.kidneyId;
    const username = req.headers.username;
    const password = req.headers.password;
    if(username != "saurav@gmail.com" || password != "pass"){
        res.status(403).json({
            msg: "Username and Password are incorrect. Please try again!"
        });
        return;
    }

    if(kidneyId != 1 && kidneyId != 2){
        res.status(411).json({
            msg: "Wrong Input!"
        })
        return;
    }

    res.send("Your heart is healthy");
})

app.get('/last-checkup', (req, res, next) => {
    console.log('first auth');
    next();
}, (req, res, next) =>{
    console.log('sencond auth');
    next();
}, (req, res) =>{
    console.log('final auth');
})




app.listen(port, () =>{
    console.log(`Port listen to ${port}`);
})