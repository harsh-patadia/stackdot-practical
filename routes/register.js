var express = require('express');
const { savedata } = require('../src/controller/institute');
const register = require('../src/controller/register');
var registerRouter = express.Router();

/* register institute in db. */
registerRouter.post('/register', register);

module.exports = registerRouter;
