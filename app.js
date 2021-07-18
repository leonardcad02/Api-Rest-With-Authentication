const express = require("express");
const session = require('express-session');
const expresHandlebars = require('express-handlebars');
const mongoose = require('mongoose');
const passport = require ('passport');
const localStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt')


const app = express.Router();



//Settings 
//Midelwares
