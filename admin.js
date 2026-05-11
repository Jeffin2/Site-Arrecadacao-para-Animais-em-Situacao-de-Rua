async function login() {
  const senha = document.getElementById("senha").value.trim(); // ✔ CORRIGIDO

  const res = await fetch("/admin-login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ senha })
  });

  if (res.ok) {
    document.getElementById("loginBox").style.display = "none";
    document.getElementById("painel").style.display = "block";
    carregar();
  } else {
    document.getElementById("erro").innerText = "Senha incorreta!";
  }
}

async function carregar() {
  const res = await fetch("/valor");
  const data = await res.json();

  document.getElementById("valorAtual").innerText = data.valor;
}

async function salvar() {
  const valor = document.getElementById("inputValor").value;

  await fetch("/valor", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ valor })
  });

  carregar();
}