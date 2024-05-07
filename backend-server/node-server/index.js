const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;
const app = express();

app.get('/route-handler', (req, res) =>{
    res.json({
        name: "saurav",
        age: 21
    });
}); 

app.use(bodyParser.json()); // we can use express in replace of bodyParser

app.post('/backend-api/conversation', (req, res) => {
    const message = req.body.message;  // To access the client message by using body parser
    console.log(message);
    res.json({
        output: "data is sended"
    })
})

app.post('/conversation', (req, res) => { 

    console.log(req.body);
    console.log(req.headers);
    res.send('<br>Lets Chat!</br>');
});

app.get('/', (req, res) =>{
    res.send("Hello World");
});

app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`);
});
