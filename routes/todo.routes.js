module.exports = app =>{
    const todos = require("../controller/todo.controller");
    const router = require("express").Router();

    router.get("/", todos.getAll);
    router.post("/", todos.create);
    router.put("/:id", todos.update);
    router.delete("/:id", todos.delete);

    app.use("/api/todos", router)
}