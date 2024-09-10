const { nanoid } = require("nanoid");
const { Pool } = require("pg");
const bcrypt = require("bcrypt");
const InvariantError = require("../../exceptions/InvariantError");
const NotFoundError = require("../../exceptions/NotFoundError");
const AuthenticationError = require("../../exceptions/AuthenticationError");

class UsersService {
  constructor() {
    this._pool = new Pool();
  }

  async addUser({ name, email, no_telp, password }) {
    await this.verifyNewUsername(email);
    const id = `user-${nanoid(11)}`;
    const hashedPassword = await bcrypt.hash(password, 10);
    const createdAt = new Date().toISOString();

    const query = {
      text: "INSERT INTO users VALUES($1, $2, $3, $4, $5, $6) RETURNING id",
      values: [id, name, email, no_telp, hashedPassword, createdAt],
    };

    const result = await this._pool.query(query);

    if (!result.rows.length) {
      throw new InvariantError("User gagal ditambahkan");
    }
    return result.rows[0].id;
  }

  async verifyNewUser(email) {
    const query = {
      text: "SELECT email FROM users WHERE email = $1",
      values: [email],
    };

    const result = await this._pool.query(query);

    if (result.rows.length > 0) {
      throw new InvariantError(
        "Gagal menambahkan user. email sudah digunakan."
      );
    }
  }

  async getUserById(userId) {
    const query = {
      text: "SELECT id, name, email FROM users WHERE id = $1",
      values: [userId],
    };

    const result = await this._pool.query(query);

    if (!result.rows.length) {
      throw new NotFoundError("User tidak ditemukan");
    }

    return result.rows[0];
  }

  async verifyUserCredential(email, password) {
    const query = {
      text: "SELECT user_id, password FROM users WHERE email = $1",
      values: [email],
    };

    const result = await this._pool.query(query);

    if (!result.rows.length) {
      throw new AuthenticationError("Kredensial salah");
    }

    const { id, password: hashedPassword } = result.rows[0];

    const match = await bcrypt.compare(password, hashedPassword);

    if (!match) {
      throw new AuthenticationError("Kredensial yang Anda berikan salah");
    }

    return id;
  }
}

module.exports = UsersService;
