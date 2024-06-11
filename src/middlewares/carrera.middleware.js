const { carreras , materias } = require('../controller/carrera.controller.js')

const seguir = (req,res,next) => {
  next()
}

const existeCarreraByID = (req,res,next) => {
  const id = req.params.id
  const idx = carreras.findIndex( s => s.id == id)
  if(idx < 0) {
    return res.status(404).json({
      error : `No se encuentra la carrera con el id ${id}`
    })
  }
  next()
}

const existeMateriaByID = (req,res,next) => {
  const id = req.params.id
  const idx = materias.findIndex( s => s.id == id)
  if(idx < 0) {
    return res.status(404).json({
      error : `No se encuentra la materia con el id ${id}`
    })
  }
  next()
}


module.exports = { seguir , existeCarreraByID, existeMateriaByID } 