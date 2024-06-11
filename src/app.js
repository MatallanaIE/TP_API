const express = require('express')
const carrerasRoute = require('./routes/carrera.routes.js')

const PORT = process.env.PORT ?? 3000
const app = express()

app.use(express.json())
app.use(carrerasRoute)

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`)
})