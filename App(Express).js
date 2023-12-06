//Express Application
const express = require('express');
const app = express();

app.listen(3000);

app.get('/',(req , res) => {
    res.sendfile('./docs/home.html', {root: __dirname});
});

app.get('/college',(req , res) => {
    res.sendfile('./docs/College.html', {root: __dirname});
});

app.get('/school',(req , res) => {
    res.sendfile('./docs/School.html', {root: __dirname});
});

app.get('/university',(req , res) => {
    res.sendfile('./docs/University.html', {root: __dirname});
});

//Redirect
app.get('/university-year',(req , res) => {
    res.redirect('./university');
});

//for error page
app.use((req, res)=>{
    res.status(404).sendfile('./docs/home.html', {root: __dirname});
});