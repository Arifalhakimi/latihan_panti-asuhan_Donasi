const Joi = require("joi");

const UserPayloadSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  no_telp: Joi.number().integer().required(),
  password: Joi.string().required(),
});

module.exports = { UserPayloadSchema };
