const express = require('express');
const router = express.Router();
const stocksCtrl = require('../../controllers/api/stocks');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.post('/',stocksCtrl.search)

module.exports = router;