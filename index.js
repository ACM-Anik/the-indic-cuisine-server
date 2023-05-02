const express = require('express');
const app = express();
const cors = require('cors');
const port = 5000;

const chefs = require('./data/chefs.json');


app.use(cors());



app.get('/', (req, res) => {
    res.send('The Indic Cuisine Server is running!')
});

app.get('/chefs', (req, res) => {
    res.send(chefs);
})
app.get('/chefs/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const singleChefs = chefs.find(singleChefs => singleChefs.id === id);
    res.send(singleChefs);
})


app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`);
});