// Update with your config settings.
import path from "path"

export default {

  development: {
    client: "sqlite3",
    connection: {
      filename: "./dev.sqlite3"
    },
    useNullAsDefault: true,
    seeds: {
      directory: path.join(__dirname, 'db/seeds')
    },
    migrations: {
      directory: path.join(__dirname, 'db/migrations')
    }

  },

  development_ps: {
    client: "postgresql",
    connection: {
      database: "baby_tracker",
      user: "postgres",
      password: "password"
    },
    useNullAsDefault: true,
    seeds: {
      directory: path.join(__dirname, 'db/seeds')
    },
    migrations: {
      directory: path.join(__dirname, 'db/migrations'),
      tableName: "knex_migrations"
    }

  },

  production: {
    client: "postgresql",
    connection: {
      database: "baby_tracker",
      user: "postgres",
      password: "password"
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: "knex_migrations"
    }
  }

};
