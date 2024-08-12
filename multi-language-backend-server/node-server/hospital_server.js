const bodyParser = require('body-parser');
const express = require('express');

const port = 3002;

const app = express();

app.use(bodyParser.json()); // mount the middle ware 


/* 
You need to create 4 routes (4 things that the hospital can do)
1. Get - User can check how many kidneys they have  and their health.
2. Post - User can add a new Kidney.
3. Put - User can replace a kidney, make it health
4. User can remove a kidney.
*/

const user = [{
    name: "John",
    kidney: [{
        healthy: true
    }]
}];

// Check Unhealthy kidney in array
function checkPoints(){
    let checkUnHealthKidney = false;
    for(i=0; i<user[0].kidney.length; i++){
        if(!user[0].kidney[i].healthy){
            checkUnHealthKidney = true;
        }
    }
    return checkUnHealthKidney;
}

// Get - User can check how many kidneys they have  and their health.
app.get('/userRequest', (req, res) => {
    const johnKidneys = user[0].kidney;
    const totalKidney = user[0].kidney.length;
    let healthKidney = 0;
    for(i=0; i<totalKidney; i++){
        if(johnKidneys[i].healthy){
        healthKidney = healthKidney + 1;
        }
    }
    const unHealthKidney = totalKidney - healthKidney;
    res.json({
        totalKidney,
        healthKidney,
        unHealthKidney
    })
});



// Post - User can add a new Kidney.
app.post('/', (req, res) => {
    const isHealthy = req.body.isHealthy;
    user[0].kidney.push({
        healthy: isHealthy
    })
    res.json({
        msg: "Done!"
    })
})



// Put - User can replace a kidney, make it health
app.put('/', (req, res) => {
    if(checkPoints()){
        for(i=0; i<user[0].kidney.length; i++){
            user[0].kidney[i].healthy = true;
        }
        res.json({
            msg: "Update"
        })
    }
    else{
        res.status(411).json({
            msg: "You don't have unhealth kidney"
        })
    }
});


// User can remove a kidney.
app.delete('/', (req, res) => {
    if(checkPoints()){
        const newKidney = [];
        for(i=0; i<user[0].kidney.length; i++){
            if(user[0].kidney[i].healthy){
                newKidney.push({
                    healthy: true
                })
            }
        }
        user[0].kidney = newKidney;
        res.json({
            msg: "delete"
        })
    }
    else{
        res.status(411).json({
            msg: "You don't have Unhealth Kidney"
        })
    }
});




app.listen(port, () =>{
    console.log(`Port listen on ${port}`);
})