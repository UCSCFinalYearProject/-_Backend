const Joi = require('@hapi/joi');

exports.MOTHER_MODEL = Joi.object({
    user_id: Joi.string(),
    first_name: Joi.string().min(3).max(100).required(),
    last_name: Joi.string().min(3).max(100).required(),
    email: Joi.string().min(3).max(200).required(),
})


