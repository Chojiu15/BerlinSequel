const express = require('express')
const app = express()
const models = require('./models')
const ownerRouter = require('./routes/Owners')
const carRouter = require('./routes/Cars')

app.get('/', (req, res) => {
    res.send('Welcome')
})

app.use(ownerRouter, carRouter)


models
.sequelize
.sync()
.then(app.listen(3000, console.log('Server running')))