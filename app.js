const express = require("express");
const path = require("node:path");
const indexRouter = require("./routers/indexRouter");
const app = express();

app.set('views',path.join(__dirname,'views'));
app.set("view engine","ejs");

require('dotenv').config();
const PORT = process.env.PORT || 8000;

app.use("/",indexRouter);

app.listen(PORT ,()=>{
    console.log(`Running on Port ${PORT}`);
});