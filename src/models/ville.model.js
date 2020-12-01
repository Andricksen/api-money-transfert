'user strict';
var dbConn = require('../../config/db.config');

//Ville object create
var Ville = function(ville){
   
    this.nom      = ville.nom;
    
     
};
Ville.create = function (newVille, result) {    
    dbConn.query("INSERT INTO ville set ?", newVille, function (err, res) {
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
Ville.findById = function (id, result) {
    dbConn.query("SELECT * FROM ville WHERE id = ? ", id, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};
Ville.findAll = function (result) {
    dbConn.query("Select * from ville", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('ville : ', res);  
            result(null, res);
        }
    });   
};
Ville.update = function(id, ville, result){
  dbConn.query("UPDATE ville SET nom=? WHERE id = ?", [ville.nom, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{   
            result(null, res);
        }
    }); 
};
Ville.delete = function(id, result){
     dbConn.query("DELETE FROM ville WHERE id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    }); 
};

module.exports= Ville;