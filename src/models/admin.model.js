'user strict';
var dbConn = require('../../config/db.config');

//Admin object create
var Admin = function(admin){
    this.name     = admin.name;
    this.pwd      = admin.pwd;
    this.email          = admin.email;
     
};
Admin.create = function (newAdmin, result) {    
    dbConn.query("INSERT INTO admin set ?", newAdmin, function (err, res) {
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
Admin.findById = function (id, result) {
    dbConn.query("SELECT * FROM admin WHERE id = ? ", id, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};

Admin.login = function (identify,password, result) {
    dbConn.query("SELECT * FROM admin WHERE (name=? OR email=?) AND pwd=? ", identify,password, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};

Admin.findAll = function (result) {
    dbConn.query("Select * from admin", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('admin : ', res);  
            result(null, res);
        }
    });   
};
Admin.update = function(id, admin, result){
  dbConn.query("UPDATE admin SET name=?,email=?,pwd=? WHERE id = ?", [admin.name,admin.email,admin.pwd, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{   
            result(null, res);
        }
    }); 
};
Admin.delete = function(id, result){
     dbConn.query("DELETE FROM admin WHERE id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    }); 
};

module.exports= Admin;