var path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const {analyzeSentence} = require('./analyzeSentence.js');
dotenv.config();

const app = express();

const cors = require('cors');

app.use(cors());
app.use(express.static('dist'))
app.use(bodyParser.json());
app.use(express.json());

console.log(__dirname);

// Variables for url and api key
const apiKey = `${process.env.API_KEY}`;

app.get('/', function (req, res) {
    res.sendFile('dist/index.html');
});


// POST Route
app.post("/url",  async (req, res) => {
    const url =  req.body.input;
    //console.log(url);
    const analyser = await analyzeSentence(url,apiKey);
    const {code, error, analyzedObj} = analyser
    console.log(code);
    if (code == 212 || code == 100) {
        return res.send({ msg: error , code: code})
    }

    return res.send({sample: analyzedObj, code: code})

})


// Designates what port the app will listen to for incoming requests
app.listen(8000, function () {
    console.log('Example app listening on port 8000!');
});


