var express = require('express');
const instituteRouter = require('./instituteRoute');
var router = express.Router();

/* GET all routes. */
router.use('/select', instituteRouter)

module.exports = router;
