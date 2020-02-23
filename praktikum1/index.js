const express = require('express')
const app = express()
const port = 2700

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/home', (req, res) => res.send('THis is home'))
app.get('/about', (req, res) => res.send('This is about'))
app.get('/adakah', (req, res) => res.send('This is adakah'))
app.get('/harri', (req, res) => res.send('Maaf andasudah di tikung'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))