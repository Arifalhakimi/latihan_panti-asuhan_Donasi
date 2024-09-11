const { nanoid } = require("nanoid");
const { Pool } = require("pg");
const InvariantError = require("../../exceptions/InvariantError");
const { mapDBProgramsToModel } = require("../../utils");
const NotFoundError = require("../../exceptions/NotFoundError");

class ProgramsService {
  constructor() {
    this._pool = new Pool();
  }

  async addProgram({ title, target, endDate }) {
    const id = `program-${nanoid(8)}`;
    const createdAt = new Date().toISOString();
    const updatedAt = createdAt;

    const query = {
      text: "INSERT INTO programs VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING program_id",
      values: [id, title, target, createdAt, updatedAt, endDate, 0],
    };

    const result = await this._pool.query(query);

    if (!result.rows.length) {
      throw new InvariantError("Program gagal ditambah");
    }

    return result.rows[0].id;
  }

  async getPrograms() {
    const result = await this._pool.query("SELECT * FROM programs");
    return result.rows.map(mapDBProgramsToModel);
  }

  async getProgramById(id) {
    const query = {
      text: "SELECT * FROM programs WHERE program_id = ($1)",
      values: [id],
    };

    const result = await this._pool.query(query);
    if (!result.rows.length) {
      throw new NotFoundError("Program tidak ditemukan");
    }

    return result.rows.map(mapDBProgramsToModel)[0];
  }

  async editProgramById(id, { title, target, endDate }) {
    const updatedAt = new Date().toISOString();
    const query = {
      text: "UPDATE programs SET title = $1, target = $2, end_date = $3, updated_at = $4 WHERE program_id = $5 RETURNING program_id",
      values: [title, target, endDate, updatedAt, id],
    };

    const result = await this._pool.query(query);

    if (!result.rows.length) {
      throw new NotFoundError("Gagal memperbarui Program. Id tidak ditemukan");
    }
  }

  async deleteProgramById(id) {
    const query = {
      text: "DELETE FROM programs WHERE program_id = $1 RETURNING program_id",
      values: [id],
    };

    const result = await this._pool.query(query);

    if (!result.rows.length) {
      throw new NotFoundError("Program gagal dihapus. Id tidak ditemukan");
    }
  }
}

module.exports = ProgramsService;
