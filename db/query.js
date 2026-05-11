const pool = require("./pool");

async function getData() {
    const data = await pool.query("SELECT * FROM message");
    return data;
}

async function insertData(text,username) {
     await pool.query("INSERT INTO message(text,username) VALUES ($1, $2)",[text,username]);
    
}

module.exports = {
    getData,
    insertData,
}