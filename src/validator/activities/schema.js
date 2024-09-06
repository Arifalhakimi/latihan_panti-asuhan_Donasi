const Joi = require("joi");

const ActivityPayloadSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string(),
  date: Joi.string().required(),
  image: Joi.string(),
  category: Joi.string(),
});

module.exports = { ActivityPayloadSchema };
