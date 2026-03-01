async function fetchJSON(url){ return JSON.parse(await (await fetch(url)).text()); }

async function carregarTudo(){
    const filmes = await fetchJSON('filmes.json');
    const series = await fetchJSON('series/series.json');
    const desenhos = await fetchJSON('desenhos/desenhos.json');
    const infantil = await fetchJSON('infantil/infantil.json');
    const documentarios = await fetchJSON('documentarios/documentarios.json');

    const render = (arr, id, prefix='')=>{
        const container = document.getElementById(id);
        arr.forEach(el=>{
            container.innerHTML += 
            <div class='item'>
                <img src='\' alt='\'>
                <p>\</p>
                <button onclick="window.open('player/player.html?video=\\.mp4')">Assistir</button>
                <button onclick="window.open('player/player.html?video=\\')">Trailer</button>
            </div>;
        });
    }

    render(filmes,'filmes');
    render(series,'series','series/');
    render(desenhos,'desenhos','desenhos/');
    render(infantil,'infantil','infantil/');
    render(documentarios,'documentarios','documentarios/');
}

carregarTudo();
