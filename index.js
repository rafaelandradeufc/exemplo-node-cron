const cron = require("node-cron");
const express = require("express");

app = express();

let cont = 0;


cron.schedule("* * * * * *", () => {
    console.log("Executando a tarefa a cada 1 segundo")

});

app.listen(1313);