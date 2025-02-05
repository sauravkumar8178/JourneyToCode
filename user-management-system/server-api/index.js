const express = require('express');
const router = require('./routes/userRoute');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use('/auth', router);

// If route is not found
app.use(( req, res, next) =>{
    console.log("Route Not Found");
    res.status(500).send({
        status: "Failed",
        message: "Route Not Found"
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


