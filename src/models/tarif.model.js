'user strict';
var dbConn = require('../../config/db.config');

//Tarif object create
var Tarif = function(tarif){
    this.ville_prov     = tarif.ville_prov;
    this.ville_des      = tarif.ville_des;
    this.frais_tarif      = tarif.frais_tarif;
     
};
Tarif.create = function (newTarif, result) {    
    dbConn.query("INSERT INTO tarif SET ?", newTarif, function (err, res) {
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
Tarif.findById = function (id, result) {
    dbConn.query("SELECT * FROM tarif WHERE idtarif = ? ", id, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};
Tarif.findAll = function (result) {
    dbConn.query("SELECT * from tarif", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('tarif : ', res);  
            result(null, res);
        }
    });   
};
Tarif.update = function(id, tarif, result){
  dbConn.query("UPDATE tarif SET ville_prov=?,ville_des=?,frais_tarif=? WHERE idtarif = ?", [tarif.ville_prov,tarif.ville_des,tarif.frais_tarif, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{   
            result(null, res);
        }
    }); 
};
Tarif.delete = function(id, result){
     dbConn.query("DELETE FROM tarif WHERE idtarif = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    }); 
};

module.exports= Tarif;
