const { Router} = require('express')
const carreraController = require('../controller/carrera.controller.js')
const carreraMiddlewares = require('../middlewares/carrera.middleware.js')
const carreraSchema = require('../schemas/carrera.schema.js')
const materiaSchema = require('../schemas/materias.schema.js')
const schemaValidator = require("../middlewares/schemaValidator.js")

const route = Router()

route.get('/carreras', carreraMiddlewares.seguir,carreraController.getAllCarreras)
route.get('/carreras/:id', carreraMiddlewares.existeCarreraByID,carreraController.getCarreraById)
route.post('/carreras', schemaValidator(carreraSchema),carreraController.createCarrera)
route.delete('/carreras/:id',carreraMiddlewares.existeCarreraByID,carreraController.deleteCarreraById)
route.post('/carreras/:id/materia',carreraMiddlewares.existeCarreraByID, schemaValidator(materiaSchema),carreraController.createMaterias)
route.get('/carreras/:id/materia',carreraMiddlewares.existeCarreraByID,carreraController.getMateriasByCarreraId)
route.get('/materias',carreraMiddlewares.seguir, carreraController.getAllMaterias)
route.get('/materias/:id',carreraMiddlewares.existeMateriaByID, carreraController.getMateriasById)
route.delete('/materias/:id',carreraMiddlewares.existeMateriaByID,carreraController.deleteMateriasById)


module.exports = route 