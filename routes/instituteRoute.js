var express = require('express');
var selectionRouter = express.Router();
const { instituteSelect, boardSelect, mediumSelect, classSelect } = require('../src/controller/institute/index');

/* GET users listing. */
selectionRouter.get('/institute', instituteSelect);
selectionRouter.get('/board', boardSelect);
selectionRouter.get('/medium', mediumSelect);
selectionRouter.get('/class', classSelect);




module.exports = selectionRouter;
