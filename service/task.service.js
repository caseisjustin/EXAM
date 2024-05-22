import { pool } from "../server.js"

const getSpecData = async (id, type) => {
    return await pool.query(`SELECT ${type} FROM task WHERE id = $1`, [id])
}

const createTask = async ( title, orders, descriptions, userId, boardId, columnId ) => {
    return await pool.query(`INSERT INTO task(title, orders, descriptions, userid, boardid, columnid) VALUES($1, $2, $3, $4, $5, $6) RETURNING *`, [title, orders, descriptions, userId,  boardId, columnId])
}

const getTasks = async () => {
    return await pool.query(`SELECT * FROM task`)
}

const getTaskById = async (id) => {
    return await pool.query(`SELECT * FROM task WHERE id = $1`, [id])
}

const updateTask = async (id, title, orders, descriptions, columnId) => {
    return await pool.query(`UPDATE task SET title = $1, orders = $2, descriptions = $3, columnid = $4 WHERE id = $5 RETURNING *`, [title, orders, descriptions, columnId, id])
}

const deleteTask = async (id) => {
    return await pool.query(`DELETE FROM task WHERE id = $1`, [id])
}

export default {
    createTask,
    getSpecData,
    getTasks,
    getTaskById,
    updateTask,
    deleteTask
}