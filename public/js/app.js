const catalogo = document.getElementById('catalogo');
const btnFilmes = document.getElementById('btn-filmes');
const btnSeries = document.getElementById('btn-series');

async function carregarCatalogo(tipo=null) {
    const res = await fetch('filmes.json');
    const data = await res.json();
    catalogo.innerHTML = '';
    let itens = data;
    if(tipo) itens = data.filter(x => x.tipo === tipo);
    itens.forEach(item => {
        const div = document.createElement('div');
        div.className = 'catalogo-item';
        div.innerHTML = \
            <img src='\' alt='\'>
            <h3>\</h3>
            <p>\</p>
        \;
        catalogo.appendChild(div);
    });
}

btnFilmes.addEventListener('click', () => carregarCatalogo('filme'));
btnSeries.addEventListener('click', () => carregarCatalogo('serie'));

carregarCatalogo(); // inicial
