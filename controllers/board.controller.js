import service from "../service/boards.service.js";

export const createBoard = async (req, res)=>{
    try {
        const { title, columns} = req.body
        if(!title || !columns){
            res.send("title or columns is missing Please add all required fields")
        }
        else{
            const result = await service.createBoard(title, columns)
            res.send(result.rows)
        }
    } catch (err) {
        res.send(err)
    }
}

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
        const result = await service.updateBoard(id, title, columns)
        res.send(result.rows)
    } catch (err) {
        res.send(err)
    }
}

export const deleteBoard = async (req, res) => {
    try {
        const id = req.params.boardId
        const result = await service.deleteBoard(id)
        res.send(result.rows)
    } catch (err) {
        res.send("err")
    }
}

