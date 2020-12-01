'use strict';

const Ville = require('../models/ville.model');

exports.findAll = function(req, res) {
  Ville.findAll(function(err, ville) {
    console.log('controller')
    if (err)
    res.send(err);
    console.log('res', ville);
    res.send(ville);
  });
};


exports.create = function(req, res) {
    const new_admin = new Ville(req.body);

    //handles null error 
   if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Ville.create(new_admin, function(err, ville) {
            if (err)
            res.send(err);
            res.json({error:false,message:"Ville added successfully!",data:ville});
        });
    }
};


exports.findById = function(req, res) {
    Ville.findById(req.params.id, function(err, ville) {
        if (err)
        res.send(err);
        res.json(ville);
    });
};


exports.update = function(req, res) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Ville.update(req.params.id, new Ville(req.body), function(err, ville) {
            if (err)
            res.send(err);
            res.json({ error:false, message: 'Ville successfully updated' });
        });
    }
  
};


exports.delete = function(req, res) {
  Ville.delete( req.params.id, function(err, ville) {
    if (err)
    res.send(err);
    res.json({ error:false, message: 'Ville successfully deleted' });
  });
};