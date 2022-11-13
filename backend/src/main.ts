import express from 'express';
import cors from 'cors'

import crypto from 'crypto'

const app = express()
app.use(express.json())
app.use(cors())
let todos = 
  [
    { id: crypto.randomUUID(), description: "Estudar typescript", done: true },
    { id: crypto.randomUUID(), description: "Aprender javascriot", done: false },
    { id: crypto.randomUUID(), description: "Estudar Vue", done: false }
  ]

app.get("/todos", (req, res) =>{
  res.json(todos)
})

app.post("/todos", (req, res) =>{
  todos.push(req.body)
  res.end()
})

app.put("/todos/:id", (req, res) =>{
  const todo = todos.find(todo => todo.id === req.params.id)
  if(todo){
    todo.done = req.body.done
  }
  res.end()
})

app.delete("/todos/:id", (req, res) =>{
  todos = todos.filter(item => item.id !== req.params.id)
  res.end()
})

app.listen(3005)