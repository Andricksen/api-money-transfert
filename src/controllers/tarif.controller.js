'use strict';

const Tarif = require('../models/tarif.model');

exports.findAll = function(req, res) {
  Tarif.findAll(function(err, tarif) {
    console.log('controller')
    if (err)
    res.send(err);
    console.log('res', tarif);
    res.send(tarif);
  });
};


exports.create = function(req, res) {
    const new_tarif = new Tarif(req.body);

    //handles null error 
   if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Tarif.create(new_tarif, function(err, tarif) {
            if (err)
            res.send(err);
            res.json({error:false,message:"Tarif added successfully!",data:tarif});
        });
    }
};


exports.findById = function(req, res) {
    Tarif.findById(req.params.id, function(err, tarif) {
        if (err)
        res.send(err);
        res.json(tarif);
    });
};


exports.update = function(req, res) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Tarif.update(req.params.id, new Tarif(req.body), function(err, tarif) {
            if (err)
            res.send(err);
            res.json({ error:false, message: 'Tarif successfully updated' });
        });
    }
  
};


exports.delete = function(req, res) {
  Tarif.delete( req.params.id, function(err, tarif) {
    if (err)
    res.send(err);
    res.json({ error:false, message: 'Tarif successfully deleted' });
  });
};