const express = require('express')
const app = express()

app.use('/', express.static('./client/'))
app.use(express.json())

app.listen(3000, () => {
    console.log('Serveur connecté')
})