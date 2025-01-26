const userRoutes  = require('./routes/userRoutes');
const express = require('express');
const app = express();

require('dotenv').config();
const port = process.env.PORT || 3000;


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

app.use('/auth',  userRoutes);

// If route is not founded
app.use('*', (req, res, next) => {
    res.status(404).json({
        message: 'Not Found',
    })
})

app.listen(port,() =>{
    console.log('Server is running on port ' + port);
})