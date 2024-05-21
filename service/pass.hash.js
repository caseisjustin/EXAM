import bcrupt from "bcrypt"


export const hasher = (password)=>{
    password = bcrupt.hash(password, 10)
    return password
}

export const passChecker = (password, savedpass) =>{
    return bcrupt.compare(password, savedpass)
}