var express = require('express');
var router = express.Router();

router.get('/', function(req, res){

	//req.session.username = null;
	//res.clearCookie('username');
	res.render('register/register');
});

module.exports = router;

