const express=require("express");
const fs=require("fs");
const app=express();
const port=3000;
app.use(express.json());

const readTodos =()=>{
    const data=fs.readFileSync("db.json","utf-8" )
    return JSON.parse(data).todos;
}

const writeTodos=(todos)=>{
    const data =JSON.stringify({todos},null,2);
    fs.writeFileSync('db.json',data);
}

app.get("/todos",(req,res)=>{
    const todos=readTodos();
    res.json(todos);
});

app.post("/todos",(req,res)=>{
    const todos=readTodos();
    const newTodos={id:todos.length+1,...req.body}
    todos.push(newTodos);
    writeTodos(todos);
    res.status(201).json(newTodos);
})

app.put('/todos/update-even-ids',(req,res)=>{
    let todos = readTodos();
    todos=todos.map(todo=>{
        if (todo.id % 2==0 && todo.status===false) {
            return {...todo,status:true}
        }
        return todo;
    });
    writeTodos(todos);
    res.json(todos);
})
app.delete('/todos/delete-true-status', (req, res) => {
    let todos = readTodos();
    todos = todos.filter(todo => !todo.status);
    writeTodos(todos);
    res.status(204).send();
  });




app.listen(port,()=>{
    console.log("server is runing");
})