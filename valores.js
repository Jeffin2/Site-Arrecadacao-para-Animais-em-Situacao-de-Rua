async function carregar() {
  const res = await fetch("/valor");
  const data = await res.json();

  const el = document.getElementById("valor");

  el.classList.add("update");
  setTimeout(() => el.classList.remove("update"), 300);

  el.innerText = data.valor;
}

carregar();
setInterval(carregar, 3000);