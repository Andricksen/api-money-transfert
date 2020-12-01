const express = require('express')
const router = express.Router()
const adminController = require('../controllers/admin.controller');

// Retrieve all admin
router.get('/', adminController.findAll);

// Create a new employee
router.post('/', adminController.create);

// Retrieve a single employee with id
router.get('/:id', adminController.findById);
router.get('/:name/:pwd', adminController.login);

// Update a employee with id
router.put('/:id', adminController.update);

// Delete a employee with id
router.delete('/:id', adminController.delete);

module.exports = router