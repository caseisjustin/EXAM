import {pool} from "../server.js"

const getSpecData = async (id, type) => {
    return await pool.query(`SELECT ${type} FROM users WHERE id = $1`, [id])
}

const getAllusers = async () => {
    return await pool.query(`SELECT * FROM users`)
}

const getUserById = async (id) => {
    return await pool.query(`SELECT name, email FROM users WHERE id = $1`, [id])
}

const updateUser = async (id, name, email, password) => {
    return await pool.query(`UPDATE users SET name = $1, email = $2, password = $3 WHERE id = $4 RETURNING name, email`, [name, email, password, id])
}

const deleteUser = async (id) => {
    return await pool.query(`DELETE FROM users WHERE id  = $1`, [id])
}

export default {
    getSpecData,
    getAllusers,
    getUserById,
    updateUser,
    deleteUser
}