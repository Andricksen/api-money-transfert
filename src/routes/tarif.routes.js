const express = require('express')
const router = express.Router()
const tarifController = require('../controllers/tarif.controller');

// Retrieve all tarif
router.get('/', tarifController.findAll);

// Create a new tarif
router.post('/', tarifController.create);

// Retrieve a single tarif with id
router.get('/:id', tarifController.findById);

// Update a tarif with id
router.put('/:id', tarifController.update);

// Delete a tarif with id
router.delete('/:id', tarifController.delete);

module.exports = router