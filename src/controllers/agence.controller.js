'use strict';

const Agence = require('../models/agence.model');

exports.findAll = function(req, res) {
  Agence.findAll(function(err, agence) {
    console.log('controller')
    if (err)
    res.send(err);
    console.log('res', agence);
    res.send(agence);
  });
};


exports.create = function(req, res) {
    const new_agence = new Agence(req.body);

    //handles null error 
   if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Agence.create(new_agence, function(err, agence) {
            if (err)
            res.send(err);
            res.json({error:false,message:"Agence added successfully!",data:agence});
        });
    }
};


exports.findById = function(req, res) {
    Agence.findById(req.params.id, function(err, agence) {
        if (err)
        res.send(err);
        res.json(agence);
    });
};


exports.update = function(req, res) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Agence.update(req.params.id, new Agence(req.body), function(err, agence) {
            if (err)
            res.send(err);
            res.json({ error:false, message: 'Agence successfully updated' });
        });
    }
  
};


exports.delete = function(req, res) {
  Agence.delete( req.params.id, function(err, agence) {
    if (err)
    res.send(err);
    res.json({ error:false, message: 'Agence successfully deleted' });
  });
};