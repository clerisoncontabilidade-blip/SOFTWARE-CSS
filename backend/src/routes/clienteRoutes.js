'use strict';

const express = require('express');
const router = express.Router();

// Mock data for the sake of example
let customers = [];

// Get all customers
router.get('/', (req, res) => {
    res.json(customers);
});

// Get single customer by ID
router.get('/:id', (req, res) => {
    const customer = customers.find(c => c.id === parseInt(req.params.id));
    if (!customer) return res.status(404).send('Customer not found');
    res.json(customer);
});

// Create a new customer
router.post('/', (req, res) => {
    const newCustomer = {
        id: customers.length + 1,
        name: req.body.name,
        email: req.body.email,
    };
    customers.push(newCustomer);
    res.status(201).json(newCustomer);
});

// Update a customer
router.put('/:id', (req, res) => {
    const customer = customers.find(c => c.id === parseInt(req.params.id));
    if (!customer) return res.status(404).send('Customer not found');
    customer.name = req.body.name;
    customer.email = req.body.email;
    res.json(customer);
});

// Delete a customer
router.delete('/:id', (req, res) => {
    const customerIndex = customers.findIndex(c => c.id === parseInt(req.params.id));
    if (customerIndex === -1) return res.status(404).send('Customer not found');
    customers.splice(customerIndex, 1);
    res.status(204).send();
});

module.exports = router;