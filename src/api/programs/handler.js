const autoBind = require('auto-bind');

class ProgramsHandler {
  constructor(service, validator) {
    this._service = service;
    this._validator = validator;

    autoBind(this);
  }

  async postProgramHandler(request, h) {
    this._validator.validateProgramPayload(request.payload);
    const { title, target, endDate } = request.payload;

    const programId = await this._service.addProgram({
      title, target, endDate
    });

    const response = h.response({
      status: "success",
      message: "Program berhasil ditambahkan",
      data: {
        programId,
      },
    });
    response.code(201);
    return response;
  }

  async getProgramsHandler() {
    const programs = await this._service.getPrograms();
    return {
      status: "success",
      data: programs,
    }
  }

  async getProgramByIdHandler(request) {
    const { id } = request.params;
    const program = await this._service.getProgramById(id);

    return {
      status: "success",
      data: program
    }
  }

  async putProgramByIdHandler(request) {
    await this._validator.validateProgramPayload(request.payload);
    const { id } = request.params;
    await this._service.editProgramById(id, request.payload);

    return {
      status: "success",
      message: "Data Program berhasil diubah",
    }
  }

  async deleteProgramByIdHandler(request) {
    const { id } = request.params;
    await this._service.deleteProgramById(id);

    return {
      status: "success",
      message: "Berhasil Menghapus Data",
    }
  }
}

module.exports = ProgramsHandler;