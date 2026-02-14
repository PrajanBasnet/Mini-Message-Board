const express = require("express");
const path = require("node:path");
const indexRouter = require("./routers/indexRouter");
const app = express();

app.set('views',path.join(__dirname,'views'));
app.use(express.static('public'));
app.set("view engine","ejs");

app.use(express.urlencoded({extended:true}));

require('dotenv').config();

const PORT = process.env.PORT || 8000;

app.use("/",indexRouter);

app.use((req,res,next)=>{
    res.status(404).render("error");
})

app.listen(PORT ,()=>{
    console.log(`Running on Port ${PORT}`);
});