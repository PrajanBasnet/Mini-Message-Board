const db = require("../db/query.js");

async function showMessage(req, res) {
    const {rows } = await db.getData();
    console.log('-*********-', rows);
    res.render("index", { messages: rows });
}

async function insertMessage(req, res){
    
    const text = req.body.msg;
    const user = req.body.user;


    await db.insertData(text,user);
    res.redirect("/");
}

module.exports = {
    insertMessage,
    showMessage,
}


