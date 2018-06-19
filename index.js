const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const server = app.listen(
    3007, 
    () => { console.log(
        'Express server listening on port %d in %s mode', 
        server.address().port, 
        app.settings.env);
    }
);

app.post('/', (req, res) => {
    const text = req.body;
    console.log(text);
    res.send('No way Jose');
    //bot goes here
});