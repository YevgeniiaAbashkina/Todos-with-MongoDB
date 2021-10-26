const express = require("express");
const cors = require("cors");
const db = require("./models"); //index.js default
const router=require("./routes/todo.routes")

const PORT = 8080;
const app = express();

let corsOption={
    origin: "http://localhost:3000"
}

app.use(cors(corsOption));

app.use(express.json())
app.use(express.urlencoded({extended:true}));

db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(()=>{
        console.log("connected to database!")
    })
    .catch(err=>{
        console.log("cannot connect to database", err);
        process.exit()
    })

app.get("/", (req, res)=>{
    res.json({"message": "hello world!"})
})

router(app)

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})

