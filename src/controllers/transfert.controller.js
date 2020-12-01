'use strict';

const Transfert = require('../models/transfert.model');

exports.findAll = function(req, res) {
  Transfert.findAll(function(err, transfert) {
    console.log('controller')
    if (err)
    res.send(err);
    console.log('res', transfert);
    res.send(transfert);
  });
};

exports.findAllAnJoin = function(req, res) {
  Transfert.findAllAnJoin(function(err, transfert) {
    console.log('controller fill all with join')
    if (err)
    res.send(err);
    console.log('res', transfert);
    res.send(transfert);
  });
};
exports.create = function(req, res) {
    const new_tarif = new Transfert(req.body);

    //handles null error 
   if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Transfert.create(new_tarif, function(err, transfert) {
            if (err)
            res.send(err);
            res.json({error:false,message:"Transfert added successfully!",data:transfert});
        });
    }
};


exports.findById = function(req, res) {
    Transfert.findById(req.params.id, function(err, transfert) {
        if (err)
        res.send(err);
        res.json(transfert);
    });
};


exports.update = function(req, res) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Transfert.update(req.params.id, new Transfert(req.body), function(err, transfert) {
            if (err)
            res.send(err);
            res.json({ error:false, message: 'Transfert successfully updated' });
        });
    }
  
};


exports.delete = function(req, res) {
  Transfert.delete( req.params.id, function(err, transfert) {
    if (err)
    res.send(err);
    res.json({ error:false, message: 'Transfert successfully deleted' });
  });
};
