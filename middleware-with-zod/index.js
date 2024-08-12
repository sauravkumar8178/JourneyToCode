const express = require('express');
const zod = require('zod');

const app = express();
const port = process.env.port || 3000;

// Extract body
app.use(express.json());

function userValidation(obj){
    const schema = zod.object({
        email: zod.string().email(),
        password: zod.string().min(8)
    })
    const response = schema.safeParse(obj);
    return response;
}
 


app.post('/user-sign-in', (req, res) =>{
    const response = userValidation(req.body);
    if(!response.success){
        res.json({
            msg: 'Your email id and possword is incorrect. Please try again...!'
        })
    }
    else{
        res.json({
            msg: 'Login Successful'
        })
    }
})


// Global Catches --> for exception handling
app.use((error, req, res, next) =>{
    console.error(error);
    res.status(500).send('An internal server error occurred');
})



app.listen(port, () =>{
    console.log(`Port listing ${port}`);
})
