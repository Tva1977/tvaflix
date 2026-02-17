async function carregarConteudo() {
  const resposta = await fetch('filmes.json');
  const dados = await resposta.json();

  const botoes = document.getElementById('botoes');
  const conteudo = document.getElementById('conteudo');

  // Criar botões dinamicamente
  const btnTodos = document.createElement('button');
  btnTodos.textContent = "Todos";
  btnTodos.onclick = () => mostrar(dados);

  const btnFilmes = document.createElement('button');
  btnFilmes.textContent = "Filmes";
  btnFilmes.onclick = () => mostrar(dados.filter(item => item.tipo === "filme"));

  const btnSeries = document.createElement('button');
  btnSeries.textContent = "Séries";
  btnSeries.onclick = () => mostrar(dados.filter(item => item.tipo === "série"));

  botoes.appendChild(btnTodos);
  botoes.appendChild(btnFilmes);
  botoes.appendChild(btnSeries);

  // Mostrar todos por padrão
  mostrar(dados);

  function mostrar(lista) {
    conteudo.innerHTML = "";
    lista.forEach(item => {
      const card = document.createElement('div');
      card.className = "card";
      card.innerHTML = 
        <h2></h2>
        <p> - </p>
        <a href="" target="_blank">Assistir Trailer</a>
      ;
      conteudo.appendChild(card);
    });
  }
}

carregarConteudo();
