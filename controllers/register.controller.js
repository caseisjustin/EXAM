import service from "../service/register.service.js"

export const registerUser = async (req, res)=>{
    try {
        const { name, email, password} = req.body
        if(!name || !email || !password){
            res.send("name, email or password is missing Please add all required fields")
        }
        else{
            const result = await service.registerUser(name, email, password)
            res.send(result.rows)
        }
    } catch (err) {
        res.send("user already exists")
    }
}

