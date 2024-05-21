import service from "../service/setup.service.js"
export const setup = async (req, res) => {
    const result = await service.setup()
    res.send(result)
}