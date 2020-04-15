//requires
const express = require('express');
const bodyParser = require('body-parser');
//needed for post requests ^
const app = express();

//globals
const port = 5000;
//uses
app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static('server/public'));
//spin up server
//use arrow functions in server.js
app.listen(port, ()=>{
    console.log('server up on:', port);
    
})//end server up
//get route
const people = ['Heather', 'Heather', 'Halima'];

app.get('/tester', (req, res) => {
    console.log('in /tester GET');
    res.send(people);    
});//end GET

app.post('/tester', (req, res) =>{
    console.log('got to POST /tester', req.body );//came from data in ajax
    people.push(req.body.name);
    console.log(people);
    res.send('woof');
});