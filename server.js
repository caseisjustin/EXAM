import app from "./app.js";
import pool from "./database/db.js";
pool.connect(err =>{
    err ? console.log("Database error")
    : console.log(`Connected to database > '${process.env.PSQL_dbname}'`)
})

app.listen(process.env.PORT, err=>{
    err ? console.log("Server error") : 
    console.log(`Server running on port ${process.env.PORT}.....`)
})


export {pool};