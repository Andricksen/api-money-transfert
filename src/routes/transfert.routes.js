const express = require('express')
const router = express.Router()
const transfertController = require('../controllers/transfert.controller');

// Retrieve all transfert
router.get('/', transfertController.findAll);

// Create a new transfert
router.post('/', transfertController.create);

// Retrieve a single transfert with id
router.get('/:id', transfertController.findById);

// Update a transfert with id
router.put('/:id', transfertController.update);

// Delete a transfert with id
router.delete('/:id', transfertController.delete);

module.exports = router