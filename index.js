const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const trades = require('./routes/trades');

const app = express();

// Port Setting
const port = process.env.PORT || 8080;

// Cors Middleware
app.use(cors());

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.json());

// Routing
app.use('/trades', trades);

app.get('/', function(req, res) {
    res.send('Invalid Endpoint');
});

// Entry Point
// app.get('*', function(req, res){
//   res.sendFile(path.join(__dirname, 'public/index.html'));
// });

// Listening
app.listen(port, function() {
    console.log('Server started on port ' + port);
});