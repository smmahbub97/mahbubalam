var db = require('./db');

module.exports= {
	getById : function(id, callback){
		var sql = "select * from emp where id=?";
		db.getResults(sql, [id], function(results){
			if(results.length > 0){
				callback(results[0]);
			}else{
				callback(null);
			}
		});
	},
	getAll : function(callback){
		var sql = "select * from emp";
		db.getResults(sql, null, function(results){
			if(results.length > 0){
				callback(results);
			}else{
				callback([]);
			}
		});
	},
	validate: function(user, callback){
		var sql ="SELECT * FROM emp where username=? and password=?";
		db.getResults(sql, [user.username, user.password], function(results){

			if(results.length > 0){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	getByUname: function(username, callback){
		var sql = "select * from emp where username=?";
		db.getResults(sql, [username], function(results){
			if(results.length > 0){
				callback(results[0]);
			}else{
				callback(null);
			}
		});
	},
	insert: function(user, callback){
		var sql = "insert into emp values(?,?,?,?,?,?.?)";
		db.execute(sql, [null, user.ename, user.cname,, user.cn,user.username, user.password, user.id], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	update : function(user, callback){
		var sql = "update emp set ename=?,cname=?,cn=?, username=?, password=? where id=?";
		db.execute(sql, [user.ename, user.cname, user.cn,user.username, user.password, user.id], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	delete: function(user, callback){
		var sql = "delete from emp where id=?";
		db.execute(sql, [user.Eid], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	}
}