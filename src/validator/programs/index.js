const { ProgramPayloadSchema } = require("./schema");
const InvariantError = require("../../exceptions/InvariantError");

const ProgramsValidator = {
  validateProgramPayload: (payload) => {
    const validationResult = ProgramPayloadSchema.validate(payload);
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
};

module.exports = ProgramsValidator;
