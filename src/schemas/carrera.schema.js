const Joi = require('joi')

const carreraSchema = Joi.object().keys(
    {   
        nombre : Joi.string().min(5).max(60).required().messages({
            "string.min" : "nombre debe tener como minimo {#limit} caracteres",
            "string.max" : "nombre debe tener como maximo {#limit} caracteres",
            "string.emty" : "nombre no puede estar vacio",
            "any.required" : "Nombre es requerido"
        }),
        grado : Joi.string().required().valid("Grado","Tecnicatura","Postgrado").messages({
            "any.required" : "Grado es requerido",
            "any.only" : "Las Opciones solo puden ser Grado,Tecnicatura y Postgrado "
        }),
        universidad : Joi.string().min(3).max(50).required().messages({
            "string.min" : "Universidad debe tener como minimo {#limit} caracteres",
            "string.max" : "Universidad debe tener como maximo {#limit} caracteres",
            "string.emty" : "Universidad no puede estar vacio",
            "any.required" : "Universidad es requerido"
        })
    }
)

module.exports = carreraSchema
