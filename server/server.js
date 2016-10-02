"use strict";

var express = require('express');
var bodyParser = require('body-parser');
var app = express();
const crypto = require('crypto');


var nextUserId = 1;

class User {
    constructor(userName, password) {
        if(name != "") {
            this.id = nextUserId++;
            this.userName = userName;
            // Salt should be random and greater than 16 bytes
            this.passwordHash = crypto.pbkdf2Sync(password, 'salt', 1000, 256, 'sha256');;
        }
    }
}

// Add resource to download Angular 2 client

// Make app automatically parse json content
app.use(bodyParser.json());

// Adding users to the app

var users = [];
users.push(new User("Fredric", "password123"))

app.get('/', (request, response) => {

});

app.post('/login', (request, response) => {
    // Skrive inn logikk for å sjekke om brukernavn er riktig. 
});

var server = app.listen(3000, () => {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});
