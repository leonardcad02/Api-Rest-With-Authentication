const express = require("express");
const session = require('express-session');
const expresHandlebars = require('express-handlebars');
const passport = require ('passport');
const localStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt')
const db = require('./database');
const {config} = require('./config');

const user = encodeURIComponent(config.dbUser);
const pass =encodeURIComponent(config.dbPassword);
const host = encodeURIComponent(config.dbHost);
const database = encodeURIComponent(config.dbName);
db(`mongodb+srv://${user}:${pass}@${host}/${database}?retryWrites=true&w=majority`);





//Settings 
//Midelwares
