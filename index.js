const express = require("express");
const app = express();
const cors = require("cors");
 const pool = require("./db");
// const path = require("path");

 const PORT = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());
// app.use(express.static(path.join(__dirname, "client-todo/build")));

//all my routes
//create a todo
app.post("/todos", async (req, res) => {
    try {
        const {description} = req.body;
        const newTodo = await pool.query(
            "INSERT INTO todo (description) VALUES($1) RETURNING *", [description]
         );
         res.json(newTodo.rows[0]);
    } catch (err) {
        console.error(err.message);
        
    }
});

//get all todos
app.get("/todos", async (req, res) =>{
    try {
        const allTodos = await pool.query("SELECT * FROM todo ");
        res.json(allTodos.rows)
    } catch (err) {
        console.error(err.message);
        
    }
});

//get a todo
app.get("/todos/:id", async (req, res) =>{
    try {
       const {id} = req.params;
       const todo =await pool.query("SELECT * FROM todo WHERE todo_id = $1", [id]);
       res.json(todo.rows[0]);
    } catch (err) {
        console.error(err.message);
        
    }
})



//update a todo
app.put("/todos/:id", async (req, res) =>{
    try {
        const {id} = req.params;
        const {description} = req.body;
        const updatetodo = await pool.query("UPDATE todo SET description=$1 WHERE todo_id = $2", [description, id])
        res.json("todo updated");
    } catch (err) {
        console.error(err.message);
        
    }
});

//delete a todo
app.delete("/todos/:id", async (req, res) =>{
    try {
        const {id} = req.params;
        const deletetodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [id]);
        res.json("todo was deleted");
    } catch (err) {
        console.error(err.message);
        
    }
})
app.listen(PORT, () => {
    console.log(`server running at port ${PORT}`)
})

// if (process.env.NODE_ENV === "production"){
//     //npm run build
//     //server static content
//     app.use(express.static(path.join(__dirname, "client-todo/build")));

// }
// console.log(__dirname);
// console.log(path.join(__dirname, "client/build"));










