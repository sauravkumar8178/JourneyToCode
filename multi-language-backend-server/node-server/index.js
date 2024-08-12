const express = require('express');
const bodyParser = require('body-parser');

// Define the port for the server to listen on.
// If the PORT environment variable is set, use its value.
// Otherwise, default to port 3000.
//Sets the environment variable PORT to 3006 using the export command.
//export PORT=3006
const port = process.env.PORT || 3000;

const app = express();

app.get('/route-handler', (req, res) =>{
    res.json({
        name: "saurav",
        age: 21
    });
}); 

app.use(bodyParser.json()); // Parses incoming JSON requests and attaches the parsed data to req.body.

app.post('/backend-api/conversation', (req, res) => {
    
    // Extracts the value of the 'message' property from the request body
    // and assigns it to the variable 'message' for further processing.
    const message = req.body.message; 
    
    // Extracts the value of the 'messageQuery' parameter from the request's query string
    // and assigns it to the variable 'messageQuery' for further processing.
    const messageQuery = req.query.messageQuery;

    console.log(messageQuery);
    console.log(message);
    res.json({
        output: "data is sended"
    })
})

app.post('/conversation', (req, res) => { 
    // Logs the content of the request body and the request headers for debugging purposes.
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
