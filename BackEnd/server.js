const express = require('express')
const model = require('./Model/DbModel')
const cors = require('cors')
const { json } = require('body-parser')
const connection = require('./Connection')
const bcrypt = require('bcrypt')
const axios = require('axios')
require('dotenv').config()
const app = express()
app.use(express.json())


app.get('/home', (req, res) => {
    res.send("get is working developer")
})

//MovieApi

app.get('/movies/genres',async(req,res)=>{
    try{
        const response = await axios.get(
            'https://api.themoviedb.org/3/genre/movie/list?language=en',
            {
                headers:{
                    accept: 'application/json',
                    Authorization: `Bearer ${process.env.TMDB_Api_Token}`
                }
            }
        )
        res.status(200).json({
            success: true,
            data:response.data

        })
    }
    catch(error){
        res.status(500).json({
            success:false,
            message: "Failed to fetch geners",
            error: error.message
        })
    }
})




// login page Api
app.post('/signup', async (req, res) => {
    try {
        const { Name, Email, PassWord } = req.body

        const hash = await bcrypt.hash(PassWord, 10)
        const find = await model.findOne({ Email: Email })

        if (find) {
           return res.status(409).json({ message: "User Already exist" })
        }
        else {
            const dbCreation = await model.create({
                Name, Email, PassWord: hash
            })
            res.status(200).json({ message: "Post Api is worrking", details: dbCreation })
        }


    }
    catch (err) {
        res.status(500).json({ message: " Post APi has some Error", details: err.message })
    }
})

connection()
app.listen(3000, () => {
    console.log("port is listening")
})