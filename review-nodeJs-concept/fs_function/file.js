const fs = require('fs');

/* fs.writeFile('./test.txt', "Hello Everyone", (err, data) =>{
    if(err){
        console.error(err);
    }
    else{
        console.log(data);
    }
}); */

// Other Way

fs.writeFileSync('./text2.txt', "Hello everyon again");

/* fs.readFile('./text2.txt', 'utf-8', (err, data)=>{
    if (err){
        console.error(err);
    }
    else{
        console.log(data);
    }
}) */

//Other Way
console.log(fs.readFileSync('./test.txt', 'utf-8'));

console.log(fs.statSync('./text2.txt'));

console.log(fs.appendFileSync('./text.txt', `${Date.now} Hey There\n`));