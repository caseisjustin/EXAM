import {pool} from "../server.js"

const setup = async ()=>{
    try {
        await pool.query(`
            CREATE TABLE IF NOT EXISTS
            users(
                id SERIAL PRIMARY KEY,
                name VARCHAR(30) UNIQUE NOT NULL,
                email VARCHAR(50) UNIQUE NOT NULL,
                password VARCHAR(100) NOT NULL
            )
        `)

        await pool.query(`
            CREATE TABLE IF NOT EXISTS
            board(
                id SERIAL PRIMARY KEY,
                title VARCHAR(100) NOT NULL,
                columns INT
            )
        `)

        await pool.query(`
            CREATE TABLE IF NOT EXISTS
            task(
                id SERIAL PRIMARY KEY,
                title VARCHAR(100) NOT NULL,
                orders INT,
                descriptions VARCHAR(100),
                userId INT,
                boardId INT,
                columnId INT,
                FOREIGN KEY(userId) REFERENCES users(id),
                FOREIGN KEY(boardId) REFERENCES board(id)
            )
        `)
        return "TABLES CREATED"
    } catch (err) {
        return "TABLES ALREADY EXIST"
    }
}

export default { setup }