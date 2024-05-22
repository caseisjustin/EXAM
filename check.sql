CREATE TABLE IF NOT EXISTS
users(
    id SERIAL PRIMARY KEY,
    name VARCHAR(30) UNIQUE NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL
)

CREATE TABLE IF NOT EXISTS
board(
    id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    columns INTEGER,
)

CREATE TABLE IF NOT EXISTS
task(
    id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    orderr INT,
    descriptions VARCHAR(100),
    userId INT NOT NULL,
    boardId INT NOT NULL,
    columnId INT,
    FOREIGN KEY(userId) REFERENCES users(id),
    FOREIGN KEY(boardId) REFERENCES board(id)
)