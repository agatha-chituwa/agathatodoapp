const express = require("express");
const app = express();
const cors = require("cors");


//middleware
app.use(express.json());
app.use(cors());
//routes

app.use("/auth", require("./Routes/todoAuth"))



app.listen(5000, () => {
    console.log("server running at 5000")
})