const Joi = require('@hapi/joi');

exports.MOTHER_MODEL = Joi.object({
    article_id: Joi.string(),
    title: Joi.string(),
    description: Joi.string(),
    category: Joi.string(),
    date: Joi.string(),
    no_of_likes: Joi.string(),
    image_1: Joi.string(),
    image_2: Joi.string(),
    doctor_id : Joi.string(),
})


