const Joi = require('@hapi/joi');

exports.MOTHER_MODEL = Joi.object({
    user_id: Joi.string(),
    first_name: Joi.string().min(3).max(100).required(),
    last_name: Joi.string().min(3).max(100).required(),
    email: Joi.string().min(3).max(200).required(), 
});


exports.PARENT_MODEL = Joi.object({
    user_id: Joi.string(),
    first_name: Joi.string().min(3).max(100).required(),
    last_name: Joi.string().min(3).max(100).required(),
    email: Joi.string().min(3).max(200).required(), 
    password: Joi.string().min(8).max(100).required(),
    mobile: Joi.string(),
    DP: Joi.string(),
    STATUS: Joi.string(),
    Block_reason: Joi.string(),
    login_status: Joi.string(),
    Reg_Date: Joi.string(),
    warning_messages: Joi.string(),
});


