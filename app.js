//array declarado vazio
let amigos = [];
function adicionar() {
    let nomeDoAmigo = document.querySelector('#nome-amigo');
    let listaAmigos = document.querySelector('#lista-amigos');

    if(nomeDoAmigo.value == '') {
        alert('Porfavor, digite o nome de um amigo!');
        return;
    }
    
    if(amigos.includes(nomeDoAmigo.value)) {
        alert('Nome repetido! Porfavor, digite outro nome, ou acrescente o seu sobrenome');
        return;
    }

    if(listaAmigos.textContent == '') {
        listaAmigos.textContent += `${nomeDoAmigo.value}`;
    } else {
        listaAmigos.textContent += `, ${nomeDoAmigo.value}`;
    }

    
    //inserindo o nomes dentro do array amigos
    amigos.push(nomeDoAmigo.value);

    nomeDoAmigo.value= '';
    
}

function sortear () {
    embaralha(amigos);
    let listaSorteio = document.querySelector('#lista-sorteio');

    if(amigos.length < 4){
        alert('Porfavor, insira no mínimo 4 participantes para o amigo secreto');
        return;
    }
    
    for(let i = 0; i < amigos.length; i++) {
        if(i == amigos.length - 1) {
            listaSorteio.innerHTML += amigos[i] + '-->' + amigos[0] + '<br>';
        } else {
            listaSorteio.innerHTML += amigos[i] + '-->' + amigos[i + 1] + '<br>';
        }
    }
}


function embaralha(amigos) {
    for (let i = amigos.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [amigos[i], amigos[j]] = [amigos[j], amigos[i]];
    }
    console.log(amigos);
}

function reiniciar () {
    amigos = [];
    document.querySelector('#lista-amigos').innerHTML= '';
    document.querySelector('#lista-sorteio').innerHTML= '';
}