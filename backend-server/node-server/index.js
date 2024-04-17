const express = require('express');
const port = 3000;
const app = express();

app.get('/route-handler', (req, res) =>{
    res.json({
        name: "saurav",
        age: 21
    })
}); 

app.get('/', (req, res) =>{
    res.send("Hello World");
});

app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`);
});