var express = require('express');
var router = express.Router();
var auth = require('../controllers/auth.token.js');

// router.use(auth.checkToken(req, res, next));

/* GET users listing. */
router.get('/', function(req, res, next) {
	res.send('respond with a resource');
});

router.use( auth.checkToken );

/* POST users listing. */
router.post('/', function(req, res, next) {
	res.json(req.body);
});

module.exports = router;
