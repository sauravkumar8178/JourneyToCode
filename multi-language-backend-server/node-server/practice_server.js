const express = require('express');
const port = 3001;
const app = express();



function sum(n){
    let ans = 0;
    for(i=0; i<n; i++){
        ans = ans + i;
    }
    return ans;
}



 
app.get('/', (req, res) =>{
    const n = req.query.n;
    const result = sum(n);
    res.send(`Result of sum is ${result}`);    
})







app.listen(port, () => {
    console.log(`Port listen on ${port}`);
})
