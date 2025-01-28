const express = require('express');
const router = require('./routes/userRoute');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use('/', router);   

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


