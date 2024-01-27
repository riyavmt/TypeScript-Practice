"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
let todos = [];
router.get('/', (req, res, next) => {
    res.status(200).json({ todos: todos });
});
router.post('/todo', (req, res, next) => {
    const newTodo = {
        id: new Date().toISOString(),
        text: req.body.text
    };
    todos.push(newTodo);
    res.status(201).json({ message: "Added Todo", todo: newTodo, todos: todos });
});
router.put('/edit/:id', (req, res, next) => {
    const todoId = req.params.id;
    const index = todos.findIndex(element => element.id === todoId);
    if (index >= 0) {
        todos[index] = { id: todos[index].id, text: req.body.text };
        return res.status(200).json({ message: "Updated the todo.", todos: todos });
    }
    res.status(404).json({ message: "Error" });
});
router.delete('/delete/:id', (req, res, next) => {
    todos = todos.filter((element) => element.id !== req.params.id);
    return res.status(200).json({ message: "Deleted the todo!" });
});
exports.default = router;
