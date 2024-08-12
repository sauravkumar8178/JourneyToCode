const express = require('express');
require('dotenv').config();

const app = express();
const PORT = 3001;



app.listen(PORT, () =>{
    console.log(`Server is connected on ${PORT}`)
})