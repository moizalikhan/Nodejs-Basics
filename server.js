const http = require('http');
const file_system = require('fs');

const server = http.createServer((req,res)=> {
    console.log(req.url, req.method);
    //set header
    res.setHeader('content-type', 'text/html');
    // res.write('<p>Moizali</p>');
    file_system.readFile('./docs/index.html',(err,data) =>{
        if(err){
            console.log(err);
            res.end();
        }
        else{
            // res.write(data);
            res.end(data);
        }
    });
});

server.listen(3000, 'localhost', ()=>{
    console.log('request on port 3000');
});