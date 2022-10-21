const express = require('express');
// const cors = require("cors");
const pool = require("../db");
const router = express.Router();

// router.use(cors());
// router.use(express.urlencoded({extended: false}));
// router.use(express.json());

//Create account with the credentials from the signup page, and save it in postgresql database

// router.get("/", async(req, res) =>{
//     try{
//         const results = await pool.query("SELECT * FROM users WHERE email = '$1' AND password = '$2'",
//         [req.body.email, req.body.password]);
//         console.log(results);
//         console.log("User found!");
//     }catch(err){
//         console.error(err.message)
//     }
// });

router.post("/create", async(req, res) => {
    try {
        const results = await pool.query("INSERT INTO users (email, password) VALUES ($1, $2) returning id",
        [req.body.email, req.body.password]);
        console.log(results);
        console.log(req.body.email)
    } catch (err) {
        console.error(err.message);
        console.log(req.body.email)
    }
});

router.post("/", async(req, res) =>{
    try{
        const results = await pool.query("SELECT * FROM users WHERE email = '$1' AND password = '$2'",
        [req.body.email, req.body.password]);
        console.log(results);
        console.log("User found!");
    }catch(err){
        console.error(err.message)
    }
});

module.exports = router;