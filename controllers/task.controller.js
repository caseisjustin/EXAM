import service from "../service/task.service.js";

export const createTask = async (req, res)=>{
    try {
        const { boardId } = req.params
        const { 
            title,
            orders,
            descriptions,
            userId,
            columnId 
        } = req.body

        if( !title || !orders || !descriptions || !userId || !boardId || !columnId ){
            res.send("order, descriptions, userId,  boardId or columnId is missing Please add all required fields")
        }
        else{
            const result = await service.createTask(title, orders, descriptions, userId, +boardId, columnId)
            res.send(result.rows)
        }
    } catch (err) {
        res.send(err)
    }
}

export const getTasks = async (req, res) => {
    try {
        const result = await service.getTasks()
        res.send(result.rows)
    } catch (err) {
        res.send(err)
    }
}

export const getTaskById = async (req, res) => {
    try {
        const id = req.params.taskId
        const result = await service.getTaskById(id)
        res.send(result.rows)
    } catch (err) {
        res.send(err)
    }
}

export const updateTask = async (req, res) => {
    try {
        const id = req.params.taskId
        let {title, orders, descriptions, columnId} = req.body
        title = title ? title : (await service.getSpecData(id, "title")).rows[0].title
        orders = orders ? orders : (await service.getSpecData(id, "orders")).rows[0].orders
        descriptions = descriptions ? descriptions : (await service.getSpecData(id, "descriptions")).rows[0].descriptions
        columnId = columnId ? columnId : (await service.getSpecData(id, "columnId")).rows[0].columnId
        const result = await service.updateTask(id, title, orders, descriptions, columnId)
        res.send(result.rows)
    } catch (err) {
        res.send(err)
    }
}

export const deleteTask = async (req, res) => {
    try {
        const id = req.params.taskId
        const result = await service.deleteTask(id)
        res.send(result.rows)
    } catch (err) {
        res.send("err")
    }
}

