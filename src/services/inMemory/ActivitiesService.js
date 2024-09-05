const { nanoid } = require("nanoid");
const InvariantError = require("../../exceptions/InvariantError");
const NotFoundError = require("../../exceptions/NotFoundError");

class ActivitiesService {
  constructor() {
    this._activities = [];
  }

  addActivity({ title, desc, date, image, category }) {
    const id = `kegiatan-${nanoid(16)}`;
    const createdAt = new Date().toISOString();

    const newActivity = {
      id,
      title,
      desc,
      date,
      image,
      category,
      createdAt,
    };

    this._activities.push(newActivity);

    const isSuccess =
      this._activities.filter((activity) => activity.id === id).length > 0;

    if (!isSuccess) {
      throw new InvariantError("kegiatan gagal ditambahkan");
    }

    return id;
  }

  getActivities() {
    return this._activities;
  }

  getActivityById(id) {
    const activity = this._activities.filter((n) => n.id === id)[0];
    if (!activity) {
      throw new NotFoundError("Kegiatan tidak ditemukan");
    }
    return activity;
  }

  deleteActivityById(id) {
    const index = this._activities.findIndex((activity) => activity.id === id);
    if (index === -1) {
      throw new NotFoundError("Kegiatan gagal dihapus. Id tidak ditemukan");
    }
    this._activities.splice(index, 1);
  }
}

module.exports = ActivitiesService;
