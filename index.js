const cron = require("node-cron");
const express = require("express");
const superagent = require('superagent');


app = express();

app.use(express.json());

cron.schedule("*/5 * * * * *", () => {

     console.log("Executando tarefa a cada 5 segundos!")

     superagent
     .post('localhost:4000/api/login')
     .send({ username: 'admin', password: '123456' })
     .set('X-API-Key', 'foobar')
     .set('accept', 'json')
     .end((err, res) => {
      console.log(res.body);
     });


});


app.listen(3000)


