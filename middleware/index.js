const express = require('express');

const app = express();
const port = process.env.port || 3000;

// Extract body
app.use(express.json());















// Global Catches --> for exception handling
app.use((error, req, res, next) =>{
    console.error(error);
    res.status(500).send('An internal server error occurred');
})



app.listen(port, () =>{
    console.log(`Port listing ${port}`);
})
