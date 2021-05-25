const models = require('../models')
const express = require('express')
const carRouter = express.Router()
carRouter.use(express.urlencoded())


carRouter.get('/api/cars', (req, res) => {
    models
    .Car
    .findAll({include : [models.Owner]})
    .then(car => res.json(car))
})

carRouter.post('/api/cars', (req, res) => {
    models
    .Car
    .create(req.body)
    .then(car => res.json(car))
})

module.exports = carRouter