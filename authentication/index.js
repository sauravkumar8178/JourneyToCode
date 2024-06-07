const express = reqiure('express')
const zod = reqiure('zod')

const app = express();
const port = process.env.port || 3000;

app.use(express.json());












app.use((error, req, res, next) =>{
    console.error(error);
    res.status(500).send('An internal server error occurred');
})

app.listen(port, () =>{
    console.log(`Port Listening on ${Port}`);
})



/* 
    As you can tell by now, anyone can send requests to your backend. They can just go to postman and send a request. How do you ensure that this user has access to a
    certain resource?

    Slightly better way-
    1. Give the user back a token on signup/signin
    2. Ask the user to send back the token in all future requests
    3. When the user logs out, ask the user to forget the token (or revoke it from the backend) 
*/