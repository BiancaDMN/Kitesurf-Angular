const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
var routes = require('./routes/routes');
const cors = require('cors');

app.use(cors({

    origin: "http://localhost:4200"

}))

app.listen(3000, function check(err){

    if(err){

        console.log('Error!');

    } else {

        console.log('Started!');

    }
});

mongoose.connect("mongodb://127.0.0.1:27017/kitesurf",{ useNewUrlParser: true,  useUnifiedTopology: true },

function checkDb(error){

    if(error){

        console.log("Error connecting to database!");

    } else {

        console.log("Successfully connected to database!");

    }
});

app.use(express.json());
app.use(routes);