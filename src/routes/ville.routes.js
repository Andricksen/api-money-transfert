const express = require('express')
const router = express.Router()
const villeController = require('../controllers/ville.controller');

// Retrieve all ville
router.get('/', villeController.findAll);

// Create a new ville
router.post('/', villeController.create);

// Retrieve a single ville with id
router.get('/:id', villeController.findById);

// Update a ville with id
router.put('/:id', villeController.update);

// Delete a ville with id
router.delete('/:id', villeController.delete);

module.exports = router