const params = new URLSearchParams(window.location.search);


const ids = params.get("id")
console.log(ids)

const pega_json = async (caminho) => {
    const resposta = await fetch(caminho + ids);
    const dados = await resposta.json();
    return dados;
}

const container = document.getElementById("container");

/*for (let i = 0; i < dados.length; i++){
    let atleta = dados[i]; */

const montaCard = (atleta) => {
    const cartao = document.createElement("article");
    const nome = document.createElement("h1");
    const imagem = document.createElement("img");
    const descri = document.createElement("p");
    const link = document.createElement("a");

    nome.innerHTML = atleta.nome;
    cartao.appendChild(nome);

    imagem.src = atleta.imagem;
    cartao.appendChild(imagem);

    descri.innerHTML = atleta.detalhes;
    cartao.appendChild(descri);

    link.innerHTML = "Saiba mais...";
    link.href =`detalhes.html?id=${atleta.id}`;
    cartao.appendChild(link);

    container.appendChild(cartao)

}



if (sessionStorage.getItem('logado')) {
    pega_json('https://botafogo-atletas.mange.li/2024-1/').then(

        (atleta) => montaCard(atleta)
    )
    
} else {
    document.body.innerHTML = `<h1>Você precisa estar logado</h1>`
}