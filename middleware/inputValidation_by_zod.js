const express = require('express');
const zod = require('zod');

const app = express();
const port = 3005;

const schema = zod.array(zod.number());

/*

const schema = zod({
    email: zod.string(),
    password: zod.string(),
    country: zod.literal('IN').or(zod.literal('US)),
    kidneys: zod.array(zod.number())
}) 

*/


app.use(express.json());

app.post('/health-checkup', (req, res) =>{
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys);
    /* const kidneyLength = kidneys.length; */
    if(!response.success){
        res.status(411).send('Wrong input. Please try again...!')
    } 
    else{
        res.send({
            response
        });
    }

    
})


app.listen(port, () =>{
    console.log(`Listening Port on ${port}`);
})
