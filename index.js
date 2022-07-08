
const express = require('express')
const bodyParse = require('body-parser')

const userRoutes = require('./routes/userRoutes')

const app = express()
const port = 3000

app.use(bodyParse.urlencoded({ extends: false }))

userRoutes(app)

app.get('/', (req, res) => res.send('Olá mundo'))

app.listen(port, () => console.log('Api rodando na porta 3000'))

