const express = require('express')
const app = express()
const port = 3000

const db = require("./DB/db");
app.set("port", port);

app.get('/', (req, res) => {
    db.query('SELECT * from User', function(error, user) {
        if(error) {
            console.log(error);
        }
        console.log(user);

        res.send(user);
    });
});

app.get('/', (req, res) => {    
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});