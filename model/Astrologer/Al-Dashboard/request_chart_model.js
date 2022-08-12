const Joi = require('@hapi/joi');

exports.REQUEST_CHART_MODEL = Joi.object({
    user_id: Joi.string(),
    first_name: Joi.string().min(3).max(100).required(),
    last_name: Joi.string().min(3).max(100).required(),
    email: Joi.string().min(3).max(100).required(),
    request_date:Joi.date().required(),
    request_status:Joi.number().required(),
})