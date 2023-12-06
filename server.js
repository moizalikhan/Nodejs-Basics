const http = require('http');
const file_system = require('fs');

const server = http.createServer((req,res)=> {
    console.log(req.url, req.method);
    //set header
    res.setHeader('content-type', 'text/html');
    // res.write('<p>Moizali</p>');

    //Routing
    let path = './docs/';
    switch(req.url){
        case '/':
            path += 'School.html';
            res.statusCode = 200
            break;

        case '/college':
            path += 'College.html';
            res.statusCode = 200
            break;
    //redirect
        case '/college-year':
            res.statusCode = 301;
            res.setHeader('location','/college');
            res.end();
            break;

        case '/university':
            path +='University.html';
            res.statusCode = 200
            break;

        default:
        path +='Home.html';
        res.statusCode = 404;
        break;
    }

    file_system.readFile(path,(err,data) =>{
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