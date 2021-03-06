var express 	= require('express');
var router 		= express.Router();
var userModel	= require.main.require('./models/user-model');

router.get('/', function(req, res){
	console.log('login page requested!');
	res.render('login/index');
});

router.post('/', function(req, res){
		
		var user ={
			username: req.body.uname,
			password: req.body.password,
			type: req.body.type
		};
if(req.body.type=="admin"){
		userModel.validateadmin(user, function(status){
			if(status){
				res.cookie('username', req.body.uname);
				res.redirect('/home');
			}else{
				res.redirect('/login');
			}
		});
	}
	else if(req.body.type=="member"){
		userModel.validatemember(user, function(status){
			if(status){
				res.cookie('username', req.body.uname);
				res.redirect('/home/member');
			}else{
				res.redirect('/login');
			}
		});
	}
});

module.exports = router;

