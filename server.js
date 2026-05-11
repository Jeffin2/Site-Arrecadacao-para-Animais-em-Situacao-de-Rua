const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

/* 📥 pegar o valor */
app.get("/valor", (req, res) => {
  db.get("SELECT valor FROM config WHERE id = 1", (err, row) => {
    if (err) return res.status(500).send(err);

    res.json({ valor: row.valor });
  });
});

/* 📤 atualizar o valor */
app.post("/valor", (req, res) => {
  const { valor } = req.body;

  db.run(
    "UPDATE config SET valor = ? WHERE id = 1",
    [valor],
    function (err) {
      if (err) return res.status(500).send(err);

      res.json({ ok: true, novoValor: valor });
    }
  );
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});