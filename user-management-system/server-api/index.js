const express = require('express');
const dbConnection = require('./db/connection');
const router = require('./routes/userRoute');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use('/', router);   

dbConnection()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })


