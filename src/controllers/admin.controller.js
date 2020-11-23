'use strict';

const Admin = require('../models/admin.model');

exports.findAll = function(req, res) {
  Admin.findAll(function(err, admin) {
    console.log('controller')
    if (err)
    res.send(err);
    console.log('res', admin);
    res.send(admin);
  });
};


exports.create = function(req, res) {
    const new_admin = new Admin(req.body);

    //handles null error 
   if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Admin.create(new_admin, function(err, admin) {
            if (err)
            res.send(err);
            res.json({error:false,message:"Admin added successfully!",data:admin});
        });
    }
};


exports.findById = function(req, res) {
    Admin.findById(req.params.id, function(err, admin) {
        if (err)
        res.send(err);
        res.json(admin);
    });
};

exports.login = function(req, res) {
    Admin.login(req.params.name,req.params.pwd, function(err, admin) {
        if (err)
        res.send(err);
        res.json(admin);
    });
};


exports.update = function(req, res) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Please provide all required field' });
    }else{
        Admin.update(req.params.id, new Admin(req.body), function(err, admin) {
            if (err)
            res.send(err);
            res.json({ error:false, message: 'Admin successfully updated' });
        });
    }
  
};


exports.delete = function(req, res) {
  Admin.delete( req.params.id, function(err, admin) {
    if (err)
    res.send(err);
    res.json({ error:false, message: 'Admin successfully deleted' });
  });
};