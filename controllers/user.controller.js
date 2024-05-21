import service from "../service/users.service.js";
import { hasher } from "../service/pass.hash.js";

export const getAllusers = async (req, res) => {
    try {
        const result = await service.getAllusers()
        res.send(result.rows)
    } catch (err) {
        res.send(err)
    }
}

export const getUserById = async (req, res) => {
    try {
        const id = req.params.userId
        const result = await service.getUserById(id)
        res.send(result.rows)
    } catch (err) {
        res.send(err)
    }
}

export const updateUser = async (req, res) => {
    try {
        const id = req.params.userId
        let {name, email, password} = req.body
        name = name ? name : (await service.getSpecData(id, "name")).rows[0].name
        email = email ? email : (await service.getSpecData(id, "email")).rows[0].email
        password = password ? await hasher(password) : (await service.getSpecData(id, "password")).rows[0].password
        const result = await service.updateUser(id, name, email, password)
        res.send(result.rows)
    } catch (err) {
        res.send(err)
    }
}

export const deleteUser = async (req, res) => {
    try {
        const id = req.params.userId
        const result = await service.deleteUser(id)
        res.send(result.rows)
    } catch (err) {
        res.send("err")
    }
}

