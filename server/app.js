const express = require('express')
const app = express()
const port = 3000


app.get('/', (req, res) => {
    res.send('launching page')
  })

app.get('/user', (req, res) => {
  res.send('Got a GET request at /user')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})