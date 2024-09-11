/**
 * @type {import('node-pg-migrate').ColumnDefinitions | undefined}
 */
exports.shorthands = undefined;

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
exports.up = (pgm) => {
  pgm.createTable("programs", {
    program_id: {
      type: "VARCHAR(16)",
      primaryKey: true,
    },
    title: {
      type: "VARCHAR(50)",
      notNull: true,
    },
    target: {
      type: "INTEGER",
      notNull: true,
    },
    created_at: {
      type: "TEXT",
      notNull: true,
    },
    updated_at: {
      type: 'TEXT',
      notNull: true,
    },
    end_date: {
      type: "TEXT",
      notNull: true
    },
    total_donasi: {
      type: "INTEGER",
      notNull: true,
    },
  });
};

/**
 * @param pgm {import('node-pg-migrate').MigrationBuilder}
 * @param run {() => void | undefined}
 * @returns {Promise<void> | void}
 */
exports.down = (pgm) => {
  pgm.dropTable("programs");
};
