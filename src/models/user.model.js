'user strict';
var dbConn = require('../../config/db.config');

//User object create
var User = function(users){
   
    this.user_name      = users.user_name;
    this.user_password      = users.user_password;
    this.user_email      = users.user_email;
    this.user_permission      = users.user_permission;
    this.idagence      = users.idagence;
    
     
};
User.create = function (newUser, result) {    
    dbConn.query("INSERT INTO users set ?", newUser, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });           
};
User.findById = function (id, result) {
    dbConn.query("SELECT * FROM users WHERE id = ? ", id, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};
User.findAll = function (result) {
    dbConn.query("Select * from users", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('users : ', res);  
            result(null, res);
        }
    });   
};
User.update = function(id, users, result){
  dbConn.query("UPDATE users SET user_name=?,user_password=?,user_email=?,user_permission=?,idagence=? WHERE id = ?", [users.user_name,users.user_password,users.user_email,users.user_permission,users.idagence, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{   
            result(null, res);
        }
    }); 
};
User.delete = function(id, result){
     dbConn.query("DELETE FROM users WHERE id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    }); 
};

module.exports= User;