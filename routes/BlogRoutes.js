const exp = require('express');
const router = exp.router();
const {
    fetchAll, 
    createBl, 
    fetchById, 
    upBl, 
    delBl
} = require("../controllers/BlogController")

/* set up routing for request handling */