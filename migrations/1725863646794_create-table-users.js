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
    pgm.createTable('users', {
        user_id: {
          type: 'VARCHAR(16)',
          primaryKey: true,
        },
        name: {
          type: 'VARCHAR(40)',
          notNull: true,
        },
        email: {
            type: 'VARCHAR(50)',
            notNull: true,
        },
        no_telp: {
            type: 'VARCHAR(13)',
            notNull: false,
        },
        password: {
          type: 'VARCHAR(30)',
          notNull: true,
        },
        forget_password: {
            type: 'VARCHAR(30)',
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
    pgm.dropTable('users');
};
