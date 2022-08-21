const Joi = require('@hapi/joi');

 exports.USER_MODEL = Joi.object({

    name: Joi.string().min(3).max(100).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    service_charge: Joi.number().integer().required(),
     registered_at:Joi.date()
})

