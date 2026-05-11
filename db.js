const sqlite3 = require("sqlite3").verbose();

// cria ou abre o arquivo database.db
const db = new sqlite3.Database("./database.db");

// cria a tabela se não existir
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS config (
      id INTEGER PRIMARY KEY,
      valor TEXT
    )
  `);

  // garante que existe um valor inicial
  db.run(`
    INSERT OR IGNORE INTO config (id, valor)
    VALUES (1, 'vazio')
  `);
});

module.exports = db;