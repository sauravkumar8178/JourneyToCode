const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) =>{
    /* console.log('New Req Rec.'); */
    const userLog = `${Date.now()}: ${req.url} New Request Recevid\n`;
    fs.appendFile('./userLog.txt', userLog, (error, data) =>{
        switch(req.url){
            case '/': res.end('HomePage');
            break
            case '/about': res.end('This is my introduction');
            break
            default: res.end('404 Not Found');
        }
    })
})

server.listen(8000, () =>{
    console.log('Server Running On');
})
