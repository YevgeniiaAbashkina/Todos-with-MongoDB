const db= require("../models");

const Todo = db.todos;

exports.create = (req, res)=>{
    if(!req.body.title){
        res.status(400).send({message:"Request body can't by  empty!"})
        return
    }
    const newTodo=new Todo({
        title:req.body.title
    })
    newTodo
        .save()
        .then(data =>{
            res.send(data)
        })
        .catch(err =>{
            res.status(500).send({
                message: err.message || "some error occurred while creating new todo"
            })
        })
}

exports.getAll=(req, res)=>{   //read
    Todo.find()
        .then(data=>{
            res.send(data)
        })
        .catch(err=>{
            res.status(500).send({
                message: err.message || "some error occurred while creating retrieving Todos"
            })
        })
}

exports.update = (req, res)=>{
    if(!req.body){
        res.status(400).send({
            message:"Request body can't by  empty!"})
        return
    }
    const id = req.params.id
    Todo.findByIdAndUpdate(id, req.body, {useFindAndModyfy: false})
    .then(data=>{
        if(!data){
            res.status(404).send({
                message:`item with id ${id} not found`
            })
        }else{
            res.send({message:`todo item with id ${id} was succesfully updated`})
        }
    })
    .catch(err =>{
        res.status(500).send({
            message: "Error updating item with id=" + id
        })
    })
}

exports.delete = (req, res)=>{
    const id = req.params.id

    Todo.findByIdAndRemove(id)
        .then(data =>{
            if(!data){
                res.status(404).send({
                    message:`item with id ${id} not found`
        })
        }else{
            res.send({message:`todo item with id ${id} was succesfully delete`})
        }
    })
    .catch(err =>{
        res.status(500).send({
            message: err.message || "Error deleting item with id=" + id
        })
    })
}