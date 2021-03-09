const express = require("express");
const cors = require("cors");
const db = require("./lib/db");

const app = express();

app.use(cors());

app.get("/profession", (request, response) => {
  const sql = `SELECT * FROM experience`;
  db.query(sql, (err, experiences) => {
    if (err) throw err;
    response.status(200).json(experiences);
  });
});

app.get("/formation", (request, response) => {
  const sql = `SELECT * FROM formation`;
  db.query(sql, (err, formations) => {
    if (err) throw err;
    response.status(200).json(formations);
  });
});
app.get("/langue", (request, response) => {
  const sql = `SELECT * FROM langue`;
  db.query(sql, (err, langues) => {
    if (err) throw err;
    response.status(200).json(langues);
  });
});
app.get("/informatique", (request, response) => {
  const sql = `SELECT * FROM informatique`;
  db.query(sql, (err, informatiques) => {
    if (err) throw err;
    response.status(200).json(informatiques);
  });
});

app.listen(8080, () => console.log("mysql_node server connected"));
