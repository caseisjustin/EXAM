import { hasher } from "./pass.hash.js";
import {pool} from "../server.js"


const registerUser = async (name, email, password) => {
    password = await hasher(password)
    return await pool.query(`INSERT INTO users(name, email, password) VALUES($1, $2, $3) RETURNING name, email`, [name, email, password])
}

export default {
    registerUser
}