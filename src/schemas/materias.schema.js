const Joi = require ('joi')

const materiaSchema = Joi.object().keys(
    {
        nombre: Joi.string().min(5).max(50).required().messages({
            "string.max": "nombre debe tener como minimo {#limit}",
            "string.max": "nombre debe tener como maximo {#limit}",
            "string.empty": "nombre no puede ser vacio",
            "any.required": "nombre es requerido"
        }),
        cuatrimestral: Joi.number().min(1).max(2).messages({
            "number.min": "cuatrimestral debe ser 1 o 2",
            "number.max": "cuatrimestral debe ser 1 o 2"
        }),
        anio: Joi.number().min(1).max(5).messages({
            "number.min": "anio debe tener como minimo {#limit}",
            "number.max": "anio debe tener como maximo {#limit}"
        })   
    }
)

module.exports= materiaSchema