'user strict';
var dbConn = require('../../config/db.config');

//Transfert object create
var Transfert = function(transfert){
    this.idtarif     = transfert.idtarif;
    this.montant      = transfert.montant;
    this.devise      = transfert.devise;
    this.commission      = transfert.commission;
    this.user_from      = transfert.user_from;
    this.ben_type_piece      = transfert.ben_type_piece;
    this.date_retrait      = transfert.date_retrait;
    this.date_transaction      = transfert.date_transaction;
    this.codesecret      = transfert.codesecret;
    this.etat      = transfert.etat;
    this.nom_expediteur      = transfert.nom_expediteur;
    this.nom_beneficiaire      = transfert.nom_beneficiaire;
    this.tel      = transfert.tel;
    this.telben      = transfert.telben;
    this.ville_prov      = transfert.ville_prov;
    this.ville_des      = transfert.ville_des;
  
    
     
};
Transfert.create = function (newTransfert, result) {    
    dbConn.query("INSERT INTO transfert SET ?", newTransfert, function (err, res) {
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
Transfert.findById = function (id, result) {
    dbConn.query("SELECT * FROM transfert WHERE id = ? ", id, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};
Transfert.findAll = function (result) {
    dbConn.query("SELECT * FROM transfert t , tarif f ,ville v", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('transfert : ', res);  
            result(null, res);
        }
    });   
};


Transfert.findAllAnJoin = function (result) {
    dbConn.query("SELECT * FROM transfert t,ville v,tarif f WHERE t.idtarif=f.idtarif AND v.id=f.ville_prov AND v.id=f.ville_des  ", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('transfert : ', res);  
            result(null, res);
        }
    });   
};
Transfert.update = function(id, transfert, result){
  dbConn.query("UPDATE transfert SET idtarif=?, montant=?, devise=?,commission=?,user_from=?,ben_type_piece=?,date_retrait=?,date_transaction=?,codesecret=?,etat=?,nom_expediteur=?,nom_beneficiaire=?, tel=?, telben=? WHERE id = ?", [transfert.idtarif,transfert.montant,transfert.devise,transfert.commission,transfert.user_from,transfert.ben_type_piece,transfert.date_retrait,transfert.date_transaction,transfert.codesecret,transfert.etat,transfert.nom_expediteur,transfert.nom_beneficiaire,transfert.telben, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{   
            result(null, res);
        }
    }); 
};
Transfert.delete = function(id, result){
     dbConn.query("DELETE FROM transfert WHERE id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    }); 
};

module.exports= Transfert;
