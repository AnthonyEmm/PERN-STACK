const { Pool } = require("pg");
const connectionString =
  "postgres://qsmvuotg:bB29M_9egdt3UoYw1vjlPl6u0bZ6bEXr@flora.db.elephantsql.com/qsmvuotg";

const pool = new Pool({
  connectionString,
});

module.exports = pool;
