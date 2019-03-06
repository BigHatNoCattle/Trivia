require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;


app.use(bodyParser.json());

app.get('/', (req,res) => {
    res.json('hello Jonathan');
})

app.get('/hello', (req,res) => {
    res.json('hello Benji');
})

app.listen(PORT, function () {
    console.log(`listening on port ${PORT}`);
}); //listens on port 3000 -> http://localhost:3000/