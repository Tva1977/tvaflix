async function carregarConteudo() {
  const resposta = await fetch('filmes.json');
  const dados = await resposta.json();

  const botoes = document.getElementById('botoes');
  const conteudo = document.getElementById('conteudo');

  if (!botoes || !conteudo) return;

  botoes.innerHTML = "";

  const btnTodos = document.createElement('button');
  btnTodos.textContent = "Todos";
  btnTodos.onclick = () => mostrar(dados);

  const btnFilmes = document.createElement('button');
  btnFilmes.textContent = "Filmes";
  btnFilmes.onclick = () =>
    mostrar(dados.filter(item => item.tipo === "filme"));

  const btnSeries = document.createElement('button');
  btnSeries.textContent = "Séries";
  btnSeries.onclick = () =>
    mostrar(dados.filter(item => item.tipo === "serie" || item.tipo === "série"));

  botoes.appendChild(btnTodos);
  botoes.appendChild(btnFilmes);
  botoes.appendChild(btnSeries);

  mostrar(dados);

  function mostrar(lista) {
    conteudo.innerHTML = "";

    lista.forEach(item => {
      const card = document.createElement('div');
      card.className = "card";

      card.innerHTML = `
        <img src="${item.poster}" alt="${item.titulo}" style="width:100%; border-radius:6px;">
        <h2>${item.titulo}</h2>
        <p>${item.genero}</p>
        <a href="${item.trailer}" target="_blank">Assistir Trailer</a>
      `;

      conteudo.appendChild(card);
    });
  }
}

carregarConteudo();
