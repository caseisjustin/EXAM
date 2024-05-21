import { passChecker } from "./pass.hash.js";
import {pool} from "../server.js"

const login = async (email, password) => {
    const datapass = await pool.query(`SELECT password FROM users WHERE email = $1`, [email])
    password = await passChecker(password, datapass.rows[0].password)
    if(password)
        return true
    else
        return false
}

export default {
    login
};