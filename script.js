function gerarCorAleatoria() {
    var letrasHex = '0123456789ABCDEF';
    var cor = '#';
    for (var i = 0; i < 6; i++) {
        cor += letrasHex[Math.floor(Math.random() * 16)];
    }
    return cor;
}

document.getElementById('trocarCorBtn').addEventListener('click', function() {
    document.body.style.backgroundColor = gerarCorAleatoria();
});