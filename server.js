const express = require('express')

const bodyParser = require('body-parser')

const path = require('path')

const app = express()

const port = process.env.PORT || 80

const mainRouter = require('./routers/main.route')

app.set('view engine', 'pug')

app.set("views", path.join(__dirname, "views"))

app.use(express.static(path.join(__dirname, "public")))

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

app.use('/',mainRouter)

const  db = require('./config/db')

app.listen(port)