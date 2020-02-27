var db = require('./db');

module.exports ={
	getById: function(id, callback){
		var sql = "select * from utype where id=?";
		db.getResult(sql, [id], function(result){
			if(result.length > 0){
				callback(result[0]);
			}else{
				callback(null);
			}
		});
	},
	getByUname: function(uname, callback){
		var sql = "select * from admin where ausername=?";
		db.getResult(sql, [uname], function(result){
			if(result.length > 0){
				callback(result[0]);
			}else{
				callback(null);
			}
		});
	},
	getByUname2: function(uname, callback){
		var sql = "select * from member where musername=?";
		db.getResult(sql, [uname], function(result){
			if(result.length > 0){
				callback(result[0]);
			}else{
				callback(null);
			}
		});
	},
	validateadmin: function(user, callback){
		var sql = "select * from admin where ausername=? and apassword=?";
		db.getResult(sql, [user.uname, user.password], function(result){
			if(result != null){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	validatemember: function(user, callback){
		var sql = "select * from member where musername=? and mpassword=?";
		db.getResult(sql, [user.uname, user.password], function(result){
			if(result != null){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	
	getAll:function(callback){
		var sql = "select * from user";
		db.getResult(sql, null, function(results){
			if(results.length > 0){
				callback(results);
			}else{
				callback(null);
			}
		});
	},
	insert: function(user, callback){
		var sql = "insert into user values(?,?,?,?)";
		db.execute(sql, [null, user.username, user.password, user.type], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	delete: function(id, callback){
		var sql = "delete from user where id=?";
		db.execute(sql, [id], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	update: function(user, callback){
		var sql = "update user set username=?, password=?, type=? where id=?";
		db.execute(sql, [user.username, user.password, user.type, user.id], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	}
	
}