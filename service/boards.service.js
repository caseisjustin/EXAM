import { pool } from "../server.js"

const getSpecData = async (id, type) => {
    return await pool.query(`SELECT ${type} FROM board WHERE id = $1`, [id])
}

const getBoards = async () => {
    return await pool.query(`SELECT * FROM board`)
}

const getBoardById = async (id) => {
    return await pool.query(`SELECT * FROM board WHERE id = $1`, [id])
}

const updateBoard = async (id, title, columns) => {
    return await pool.query(`UPDATE board SET title = $1, columns = $2 WHERE id = $3 RETURNING *`, [title, columns, id])
}

const deleteUser = async (id) => {
    return await pool.query(`DELETE FROM board WHERE id  = $1`, [id])
}

export default {
    getSpecData,
    getBoards,
    getBoardById,
    updateBoard,
    // updateUser,
    // deleteUser
}