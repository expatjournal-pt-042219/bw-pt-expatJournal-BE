// Update with your config settings.

const localPgConnection = {
  host: "localhost",
  database: "expatJournal",
  // need to know credentials
  user: "lambdaStudent",
  password: "password",
};

const prodDbConnection = process.env.DATABASE_URL || localPgConnection;

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './database/expatJournal.sqlite3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './database/migrations',
    },
    seeds: {
      directory: './database/seeds',
    },
  },

  testing: {
    client: 'sqlite3',
    connection: {
      filename: './database/expatJournal.sqlite3'
    },
    useNullAsDefault: true,
    migrations: {
      directory: './database/migrations',
    },
    seeds: {
      directory: './database/seeds',
    },
  },

  production: {
    client: 'pg',
    // connection can be object or string
    connection: prodDbConnection,
    migrations: {
      directory: './database/migrations',
    },
    seeds: {
      directory: './database/seeds',
    },
  }


  // staging: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // },

};
