const express = require('express')
const app = express()
const PORT = process.env.PORT || 8000
const planets = require('./planets')

app.use(express.json())
app.use(require('cors')())

app.get('/planets/:key', (req, res) => {
  const { key } = req.params

  if (+key) {
    const index = planets.findIndex(item => item.number == key)
    const planet = planets[index]

    if (!planet) {
      res.status(404).send('No planet with this number')
      return
    }

    res.send(planet)
  } else {
    const index = planets.findIndex(item =>
      item.name.toLowerCase() === key.toLowerCase()
    )
    const planet = planets[index]

    if (!planet) {
      res.status(404).send('No planet with this name')
      return
    }

    res.send(planet)
  }
})

app.listen(PORT)
