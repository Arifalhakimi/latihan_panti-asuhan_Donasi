const Joi = require("joi");

const ActivityPayloadSchema = Joi.object({
  title: Joi.string().required(),
  desc: Joi.string(),
  date: Joi.date().required(),
  image: Joi.string(),
  category: Joi.string(),
});

module.exports = { ActivityPayloadSchema };
