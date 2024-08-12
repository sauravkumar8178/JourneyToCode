const express = require('express');

const app = express();
const port = 3003;

app.use(express.json());

app.post('/health-checkup', (req, res) =>{
    const kidneys = req.body.kidneys;
    const kidneyLength = kidneys.length;

    res.send('You have' + kidneyLength + 'kidneys');
})


// Global catches
app.use((error, req, res, next) =>{
    //console.error(error); // log the error for debugging
    res.status(500).send('An internal server error occurred');
})


app.listen(port, () =>{
    console.log(`Listening Port on ${port}`);
})
