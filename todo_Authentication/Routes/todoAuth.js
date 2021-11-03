
// const express = require("express")
// const router = express.Router();

const Router = require('express-promise-router')
const pool  = require("../db");
const router = new Router()
const bcrypt = require("bcrypt")

    router.post("/register", async (req, res) => 
    {

        try {
            //destructure the req.body email name password

            const {name, email, password} = req.body;

           

            //check if user exist if exist throw an error

            const user = await pool.query("SELECT * from users WHERE user_email = $1", [
                email
            ])
            if(user.rows.length !== 0){
                return res.status(401).send("user already exist");
            }
            
            const saltRounds =10;
            const salt = await bcrypt.genSalt(saltRounds);

            const bcryptpassword = await bcrypt.hash(password, salt);

            const newuser = await pool.query
            (
                "INSERT INTO users (user_name, user_email, user_password) VALUES ($1, $2, $3) RETURNING *",
             [name, email, bcryptpassword]);
             res.json(newuser.rows[0]);
            //bcrypt the users password

            //enter new user into database

            //generating jwt token
            


        } catch (err) {
            console.log(err.message);
            res.status(500).send("server error");  
        }

    })



module.exports = router;