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
    const data = req.body;
    const text = req.body.text;
    const channel = req.body.channel_name;
    console.log(data);
    if (text && text === 'on') {
        res.send('Turning on moderation for ' + channel);
    } else if (text && text === 'off') {
        res.send('Turning off moderation for ' + channel);
    } else {
        res.send('Moderation status');
    }

    //bot goes here
});