const express = require('express');
const router = express.Router();
const stocksCtrl = require('../../controllers/api/stocks');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.post('/getStocks', stocksCtrl.search)
router.post('/getTickerInfo', stocksCtrl.searchTickerInfo)
router.post('/addFavorite', stocksCtrl.addFavorite)

module.exports = router;