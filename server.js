const express = require("express");
const cors = require("cors");
const db = require("./db");
const path = require("path");
const fs = require("fs");

const app = express();

/* 🔐 senha admin */
require("dotenv").config();
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "#RoyaltyGuys";

/* ⚙️ middleware */
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

/* 🧠 função de log */
function registrarLog(mensagem) {
  const data = new Date().toLocaleString("pt-BR");
  const linha = `[${data}] ${mensagem}\n`;

  fs.appendFile("log.txt", linha, (err) => {
    if (err) console.log("Erro ao salvar log:", err);
  });
}

/* 🌐 páginas */
app.get("/admin", (req, res) => {
  res.sendFile(path.join(__dirname, "admin.html"));
});

app.get("/valores", (req, res) => {
  res.sendFile(path.join(__dirname, "valores.html"));
});

/* 🔐 login admin */
app.post("/admin-login", (req, res) => {
  const senhaRecebida = (req.body.senha || "").trim();

  if (senhaRecebida === ADMIN_PASSWORD) {
    registrarLog("Admin fez login");
    return res.json({ ok: true });
  }

  registrarLog("Tentativa de login falhou");
  return res.status(401).json({ ok: false, erro: "Senha incorreta" });
});

/* 📥 pegar valor */
app.get("/valor", (req, res) => {
  db.get("SELECT valor FROM config WHERE id = 1", (err, row) => {
    if (err) return res.status(500).send(err);

    res.json({ valor: row?.valor || "" });
  });
});

/* 📤 atualizar valor + LOG */
app.post("/valor", (req, res) => {
  const { valor } = req.body;

  db.run(
    "UPDATE config SET valor = ? WHERE id = 1",
    [valor],
    (err) => {
      if (err) return res.status(500).send(err);

      registrarLog(`Valor alterado para: ${valor}`);

      res.json({ ok: true });
    }
  );
});

/* 🚀 porta do Render */
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});