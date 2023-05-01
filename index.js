const express = require('express');
const app = express();
const port = 5000;


const chefs = require('./data/chefs.json');

app.get('/', (req, res) => {
    res.send('The Indic Cuisine Server is running!')
});

app.get('/chefs', (req, res) => {
    res.send(chefs);
})


app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`)
});