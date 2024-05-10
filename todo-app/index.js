const express = require('express');

const bodyParser = require('body-parser');

const port = process.env.port || 3000;


const app = express();





















    
app.listen(port, () => {
    console.log(`App listen on Port ${port}`)
})
