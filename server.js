const express = require("express");
const cors = require("cors");
const db = require("./db");
const path = require("path");

const app = express();

const ADMIN_PASSWORD = "#RoyaltyGuys"; // 🔐 mude sua senha aqui

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

/* 📄 páginas */
app.get("/admin", (req, res) => {
  res.sendFile(path.join(__dirname, "admin.html"));
});

app.get("/valores", (req, res) => {
  res.sendFile(path.join(__dirname, "valores.html"));
});

/* 🔐 login admin */
app.post("/admin-login", (req, res) => {
  const { senha } = req.body;

  if (senha === ADMIN_PASSWORD) {
    res.json({ ok: true });
  } else {
    res.status(401).json({ ok: false });
  }
});

/* 📥 pegar valor */
app.get("/valor", (req, res) => {
  db.get("SELECT valor FROM config WHERE id = 1", (err, row) => {
    if (err) return res.status(500).send(err);
    res.json({ valor: row.valor });
  });
});

/* 📤 atualizar valor */
app.post("/valor", (req, res) => {
  const { valor } = req.body;

  db.run(
    "UPDATE config SET valor = ? WHERE id = 1",
    [valor],
    (err) => {
      if (err) return res.status(500).send(err);
      res.json({ ok: true });
    }
  );
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});