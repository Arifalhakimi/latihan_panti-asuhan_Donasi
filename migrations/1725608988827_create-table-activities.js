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
  pgm.createTable("activities", {
    activity_id: {
      type: "VARCHAR(16)",
      primaryKey: true,
    },
    title: {
      type: "VARCHAR(50)",
      notNull: true,
    },
    description: {
      type: "TEXT",
      notNull: false,
    },
    date: {
      type: "TEXT",
      notNull: true,
    },
    image: {
      type: "VARCHAR(50)",
      notNull: false,
    },
    category: {
      type: "VARCHAR(20)",
      notNull: false,
    },
    created_at: {
      type: "TEXT",
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
  pgm.dropTable("activities");
};
