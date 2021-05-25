const models = require('../models')
const express = require('express')
const ownerRouter = express.Router()
ownerRouter.use(express.urlencoded())


ownerRouter.get('/api/owners', (req, res) => {
    models
    .Owner
    .findAll()
    .then(owner => res.json(owner))
})

ownerRouter.post('/api/owners', (req, res) => {
    models
    .Owner
    .create(req.body)
    .then(owner => res.json(owner))
})

module.exports = ownerRouter