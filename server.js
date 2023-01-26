const express = require('express')
const initDB = require('./configuracion/db')
const app = express()
const port = 3001
const bodyparser = require('body-parser')
const cors = require('cors')
//const userRouters = require('./app/routes/user')

// Controllers

const userController = require('./app/controller/user')
app.use(userController)

app.use(cors(
    {origin:'*'}
))
app.use(
    bodyparser.json({
        limit: '20mb'
    })
)
// for parsing application/x-www-form-urlencoded
app.use(
    bodyparser.urlencoded({
        limit: '20mb',
        extended: true
    })
)

app.listen(port,() => {
    console.log('la aplicacion está en linea');
})

initDB()
