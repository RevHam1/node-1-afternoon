const express = require('express');
const bodyParser = require('body-parser');
const mc = require( __dirname + '/controllers/messages_controller');


const app = express();

app.use( bodyParser.json() );

const messagesBaseUrl = "/api/messages";
app.post( messagesBaseUrl, mc.create );
app.get( messagesBaseUrl, mc.read );

const port = 3000;
app.listen( port, () => { console.log(`Server listening on port ${port}.`); } );