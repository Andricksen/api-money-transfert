const express = require('express')
const router = express.Router()
const agenceController = require('../controllers/agence.controller');

// Retrieve all agence
router.get('/', agenceController.findAll);

// Create a new agence
router.post('/', agenceController.create);

// Retrieve a single agence with id
router.get('/:id', agenceController.findById);

// Update a agence with id
router.put('/:id', agenceController.update);

// Delete a agence with id
router.delete('/:id', agenceController.delete);

module.exports = router