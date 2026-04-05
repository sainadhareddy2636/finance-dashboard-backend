const Joi = require("joi");

const recordValidator = (req, res, next) => {
  const schema = Joi.object({
    amount: Joi.number().positive().required(),
    type: Joi.string().valid("income", "expense").required(),
    category: Joi.string().required(),
    date: Joi.date().required(),
    description: Joi.string().optional()
  });

  const { error } = schema.validate(req.body);

  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  next();
};

module.exports = recordValidator;