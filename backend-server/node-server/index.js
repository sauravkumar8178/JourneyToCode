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

app.use(bodyParser.json());

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
