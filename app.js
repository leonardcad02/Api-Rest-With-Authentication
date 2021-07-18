const express = require("express");
const session = require('express-session');
const hbs = require('express-handlebars');
const passport = require ('passport');
const localStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt')
const db = require('./database');
const {config} = require('./config');
const app = express();


const user = encodeURIComponent(config.dbUser);
const pass =encodeURIComponent(config.dbPassword);
const host = encodeURIComponent(config.dbHost);
const database = encodeURIComponent(config.dbName);
db(`mongodb+srv://${user}:${pass}@${host}/${database}?retryWrites=true&w=majority`);

// midelware
app.engine('hbs', hbs({extname: '.hbs'}));
app.set('views engine', 'hbs');
app.use(express.static(__dirname + '/public'));
app.use(session({
    secret: 'verygoodsecreet',
    resave:false,
    saveUninitialized:true
}));

app.use(express.urlencoded({extended:false}))
app.use(express.json());

//passport.use
app.use(passport.initialize());
app.use(passport.session());





//Settings 
//Midelwares
