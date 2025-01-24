var express = require('express');
const instituteRouter = require('./instituteRoute');
const registerRouter = require('./register');
var router = express.Router();

/* GET all routes. */
router.use('/select', instituteRouter)
router.use('/', registerRouter)


module.exports = router;
