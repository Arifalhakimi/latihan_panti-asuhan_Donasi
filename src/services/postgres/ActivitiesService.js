const { Pool } = require("pg");
const { nanoid } = require("nanoid");
const InvariantError = require("../../exceptions/InvariantError");
const { mapDBActivitiesToModel } = require("../../utils");
const NotFoundError = require("../../exceptions/NotFoundError");

class ActivitiesService {
  constructor() {
    this._pool = new Pool();
  }

  async addActivity({ title, description, date, image, category }) {
    const id = `kegiatan-${nanoid(7)}`;
    const createdAt = new Date().toISOString();

    console.log(title, description, date, image, category);
    const query = {
      text: "INSERT INTO activities VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING activity_id",
      values: [id, title, description, date, image, category, createdAt],
    };

    const result = await this._pool.query(query);

    if (!result.rows[0].activity_id) {
      throw new InvariantError("Kegiatan gagal ditambahkan");
    }

    return result.rows[0].activity_id;
  }

  async getActivities() {
    const result = await this._pool.query("SELECT * FROM activities");
    return result.rows.map(mapDBActivitiesToModel);
  }

  async getActivityById(id) {
    const query = {
      text: "SELECT * FROM activities WHERE activity_id = $1",
      values: [id],
    };
    const result = await this._pool.query(query);

    if (!result.rows.length) {
      throw new NotFoundError("Kegiatan tidak ada");
    }

    return result.rows.map(mapDBActivitiesToModel)[0];
  }

  async deleteActivityById(id) {
    const query = {
      text: "DELETE FROM activities WHERE activity_id = $1 RETURNING activity_id",
      values: [id],
    };
    const result = await this._pool.query(query);

    if (!result.rows.length) {
      throw new NotFoundError("Kategori gagal dihapus, karna tidak ditemukan");
    }
  }
}

module.exports = ActivitiesService;
