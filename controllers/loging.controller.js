import service from "../service/login.service.js"

export const login = async (req, res) => {
    try {
        const { email, password } = req.body
        const result = await service.login(email, password)
        res.send(result)
    } catch (err) {
        res.send(err)
    }
}