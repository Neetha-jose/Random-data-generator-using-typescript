require("dotenv").config()
import express from 'express';
import mongoose from "mongoose";
import routes from './routers/Contractroute'
import bodyParser from 'body-parser';
import cors from "cors"
const app = express();
//const users=require("./models/userSchema")

app.use(bodyParser.urlencoded({
    extended: false
}))

app.get("/", (req, res) => {
    console.log("heooo");
    res.json({hi:"hello"})
})
app.post("/create", (req, res) => {
 // const data: string[] = [];
    // const namesList: string[] = ['John', 'Alice', 'Bob', 'Emma', 'David', 'Sophia', 'Michael', 'Olivia', 'Daniel', 'Ava'];
    // for (let i = 0; i < numOfData; i++) {
    //   const randomIndex = Math.floor(Math.random() * namesList.length);
    //   data.push(namesList[randomIndex]);
    // }
    // setRandomData(data)
})

const PORT = 3001 || process.env.port


app.use(cors())

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }))

mongoose.connect(process.env.MONGO_URL || "")
.then(()=>console.log("connected to mongodb..."))
.catch((err:any)=>console.log(err))

app.use(routes)

app.listen(PORT, () => console.log(`Server Running at ${PORT}`))