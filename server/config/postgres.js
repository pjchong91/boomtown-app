const { Pool } = require('pg')

module.exports = function(app) {
  /**
   * @TODO: Configuration Variables
   *
   *  Retrieve the necessary information to connect to Postgres
   *  For example: app.get('PG_DB')
   */
  return new Pool({

    host: app.get('HOST'),
    database: app.get('PG_DB'),
    user: app.get('PG_USER'),
    password: app.get('PG_PASSWORD'),
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000

  })
}
