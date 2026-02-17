fetch('/filmes.json')
.then(r => r.json())
.then(lista => {
    const c = document.getElementById('container');
    c.innerHTML = '';

    lista.forEach(f => {
        const div = document.createElement('div');
        div.className = 'filme';

        div.innerHTML = 
            <img src="\">
            <h3>\</h3>
            <p>\</p>
            <a href="\" target="_blank">Trailer</a>
        ;

        c.appendChild(div);
    });
})
.catch(err => {
    document.getElementById('container').innerHTML =
        "<p>Erro ao carregar filmes.</p>";
    console.log(err);
});
