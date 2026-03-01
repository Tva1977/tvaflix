async function fetchJSON(url){ return JSON.parse(await (await fetch(url)).text()); }

async function carregarTudo(){
    const filmes = await fetchJSON('filmes.json');
    const series = await fetchJSON('series/series.json');

    const render = (arr, id, prefix='')=>{
        const container = document.getElementById(id);
        arr.forEach(el=>{
            container.innerHTML += 
            <div class='item'>
                <img src='\' alt='\'>
                <p>\</p>
                <button onclick=\"window.open('\')\">Assistir</button>
                <button onclick=\"window.open('\\")\">Trailer</button>
            </div>;
        });
    }

    render(filmes,'filmes');
    render(series,'series');
}
carregarTudo();
