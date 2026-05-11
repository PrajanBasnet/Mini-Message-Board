const { Client } = require("pg");

const SQL = `

CREATE TABLE IF NOT EXISTS  message(
id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
text VARCHAR(255),  
username VARCHAR(255)   
);

INSERT INTO message(text, username) VALUES
  ('Hello World', 'Alice'),
  ('How are you?', 'Bob'),
  ('This is a message', 'Charlie');
`;


async function  main() {
    console.log("Seeding...");
    const client = new Client({
        connectionString: "postgresql://pablo:root@localhost:5432/users",
    });
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("done");
}

main();