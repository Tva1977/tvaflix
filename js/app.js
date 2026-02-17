fetch('/filmes.json')
.then(r => r.json())
.then(lista => {
    const c = document.getElementById('container');
    c.innerHTML = '';
    lista.forEach(f => {
        c.innerHTML += 
        <div class="filme">
            <img src="\">
            <h3>\</h3>
            <p>\</p>
            <a href="\" target="_blank">Trailer</a>
        </div>;
    });
});
