import service from "../service/boards.service.js";
import { hasher } from "../service/pass.hash.js";

export const getBoards = async (req, res) => {
    try {
        const result = await service.getBoards()
        res.send(result.rows)
    } catch (err) {
        res.send(err)
    }
}

export const getBoardById = async (req, res) => {
    try {
        const id = req.params.boardId
        const result = await service.getBoardById(id)
        res.send(result.rows)
    } catch (err) {
        res.send(err)
    }
}

export const updateBoard = async (req, res) => {
    try {
        const id = req.params.boardId
        let {title, columns} = req.body
        title = title ? title : (await service.getSpecData(id, "title")).rows[0].title
        columns = columns ? columns : (await service.getSpecData(id, "columns")).rows[0].columns
        console.log(title, columns)
        const result = await service.updateBoard(id, title, columns)
        res.send(result.rows)
    } catch (err) {
        res.send(err)
    }
}

// export const deleteUser = async (req, res) => {
//     try {
//         const id = req.params.userId
//         console.log("ok")
//         const result = await service.deleteUser(id)
//         res.send(result.rows)
//     } catch (err) {
//         res.send("err")
//     }
// }

