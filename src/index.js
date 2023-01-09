const express = require("express")
const route = require("./routes/route.js")
const mongoose = require("mongoose")
const multer=require("multer")
const app = express()

app.use(multer().any())
app.use(express.json());

mongoose.set('strictQuery', true);
mongoose.connect("mongodb+srv://RahulSinghDhek:IQpy326QQQKAkK2J@cluster0.dxzlfnc.mongodb.net/group6Database?retryWrites=true&w=majority",)
    .then(() => console.log("MongoDb is connected"))
    .catch(err => console.log(err))

app.use('/', route);

app.listen(3001)



