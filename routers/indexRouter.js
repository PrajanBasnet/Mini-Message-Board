const express = require("express");
const indexRouter = express();

const messages = [
    {
        text: "Hello",
        user: "prajwal",
        addaded: new Date(),
        color: "rgb(253,253,202)"
    },
    {
        text: "How Do you do",
        user: "spider",
        addaded: new Date(),
        color: "rgb(205,253,204)"
    },
]

indexRouter.get("/", (req, res) => {
    res.render("index", { messages: messages });
})

indexRouter.post("/", (req, res) => {
    const newMsg = 
        {
            text: req.body.msg,
            user: req.body.user,
            addaded: new Date(),
            color: "rgb(253,253,202)"
        }
    
    console.log(req.body.user);
    messages.push(newMsg);

    console.log(messages);
    res.redirect("/");
})

// indexRouter.get("/:", (req, res) => {
//     res.send("404")
// })

module.exports = indexRouter;