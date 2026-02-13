const express = require("express");

const indexRouter = express();

const messages = [
    {
        text:"Hello",
        user:"prajwal",
        addaded: new Date(),
    },
      {
        text:"How Do you do",
        user:"spider",
        addaded: new Date(),
    },
]

indexRouter.get("/",(req,res)=>{
    res.render("index",{messages:messages});
})



module.exports = indexRouter;