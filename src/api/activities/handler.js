const autoBind = require("auto-bind");

class ActivitiesHandler {
  constructor(service, validator) {
    this._service = service;
    this._validator = validator;

    autoBind(this);
  }

  async postActivityHandler(request, h) {
    this._validator.validateActivityPayload(request.payload);
    const { title, desc = `${title}`, date, image, category } = request.payload;

    const activityId = await this._service.addActivity({
      title,
      desc,
      date,
      image,
      category,
    });

    const response = h.response({
      status: "success",
      message: "Kegiatan berhasil ditambahkan",
      data: {
        activityId,
      },
    });
    response.code(201);
    return response;
  }

  async getActivitiesHandler() {
    const activities = await this._service.getActivities();
    return {
      status: "success",
      data: {
        activities,
      },
    };
  }

  async getActivityByIdHandler(request) {
    const { id } = request.params;
    const activity = await this._service.getActivityById(id);
    return {
      status: "success",
      data: {
        activity,
      },
    };
  }

  async deleteActivityByIdHandler(request) {
    const { id } = request.params;
    await this._service.deleteActivityById(id);

    return {
      status: "success",
      message: "Kegiatan berhasil dihapus",
    };
  }
}

module.exports = ActivitiesHandler;
