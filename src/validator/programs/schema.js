const Joi = require("joi");

const ProgramPayloadSchema = Joi.object({
  title: Joi.string().required(),
  target: Joi.number().integer().required(),
  endDate: Joi.string().required(),
});

module.exports = { ProgramPayloadSchema };
