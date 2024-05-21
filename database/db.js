import pg from "pg"
const {Pool} = pg
const {PSQL_user, PSQL_password, PSQL_host, PSQL_port, PSQL_dbname} = process.env
const pool = new Pool({
    user: PSQL_user,
    password: PSQL_password,
    host: PSQL_host,
    port: PSQL_port,
    database: PSQL_dbname
})

export default pool