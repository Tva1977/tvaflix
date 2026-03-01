const filmes=JSON.parse(fetch('filmes.json').then(r=>r.text()));
const series=JSON.parse(fetch('series/series.json').then(r=>r.text()));

async function carregar(){
    const f=await filmes, s=await series;
    const filmesDiv=document.getElementById('filmes');
    const seriesDiv=document.getElementById('series');
    f.forEach(fm=>filmesDiv.innerHTML+=<div><img src='\'><p>\</p><button onclick=\"window.open('player/player.html?video=\')\">Assistir</button></div>);
    s.forEach(sr=>seriesDiv.innerHTML+=<div><img src='\'><p>\</p><button onclick=\"window.open('player/player.html?video=public/series/\.mp4')\">Assistir</button></div>);
}
carregar();
