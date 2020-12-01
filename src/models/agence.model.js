'user strict';
var dbConn = require('../../config/db.config');

//Agence object create
var Agence = function(agence){
    this.nom     = agence.nom;
    this.ville_id      = agence.ville_id;
     
};
Agence.create = function (newAgence, result) {    
    dbConn.query("INSERT INTO agence SET ?", newAgence, function (err, res) {
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
Agence.findById = function (id, result) {
    dbConn.query("SELECT * FROM agence WHERE id = ? ", id, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};
Agence.findAll = function (result) {
    dbConn.query("SELECT * from agence", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('agence : ', res);  
            result(null, res);
        }
    });   
};
Agence.update = function(id, agence, result){
  dbConn.query("UPDATE agence SET nom=?,ville_id=? WHERE id = ?", [agence.nom,agence.ville_id, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{   
            result(null, res);
        }
    }); 
};
Agence.delete = function(id, result){
     dbConn.query("DELETE FROM agence WHERE id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    }); 
};

module.exports= Agence;