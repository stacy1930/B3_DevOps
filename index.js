const dotenv = require('dotenv');
dotenv.config();
const DB_USERNAME = process.env.DB_USERNAME
const DB_PASSWORD = process.env.DB_PASSWORD

var express = require('express');
var mongoose = require('mongoose'); 
