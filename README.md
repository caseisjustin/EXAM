# An Exam project
## How to use
=====================USER=======================
* Create user
  - method: POST
  - link: /register
  - body: name, email, password = required

* Check if user logedin
  - method: GET
  - link: /login
  - body: email, password = required
* Get All users info
  - method: GET
  - link: /users
* Get User by id
  - method: GET
  - link: /users/:id = required   example (/users/2)
* Update User data
  - method: PUT
  - link: users/:id = required  example (/users/1)
  - body: name, email, password = optional
* Delete User
  - method: DELETE
  - link: /users/:id = example (/users/2)

==========================BOARD===========================

* Create Board
  - method: POST
  - link: /board
  - body: title, columns = required
* Get All Boards
  - method: GET
  - link: /board
* Get Board by id
  - method: GET
  - link: /board/:boardId = example(/board/1)
* Update Board
  - method PUT
  - link: /board/:boardId = example(/board/4)
  - body: title, columns = optional
* Delete Board
  - method: DELETE
  - link: /board/:boardId = example(/board/2)

=========================TASKS==============================

* Create Task
  - method: POST
  - link: /board/:boardId/tasks = example(/board/1/tasks)
  - body: title, orders, descriptions, userId, boardId, columnId
* Get All tasks
  - method: GET
  - link: /board/:boardId/tasks = example(/board/1/tasks)
* Get Task by id
  - method: GET
  - link: /board/:boardId/tasks/:taskId = example(/board/1/tasks/3)
* Update Task
  - method: PUT
  - link: /board/:boardId/tasks/:taskId = example(/board/1/tasks/4)
  - body: title, orders, descriptions, columnId = optional    (userId, boardId) = unchangable
* Delete Task
  - method: DELETE
  - link: /board/:boardId/tasks/:taskId = example(/board/1/tasks/4)

