const jogadora = document.getElementById('jogadora')
const img = document.getElementById('imagem')
const descricao = document.getElementById('descricao')

// atleta = dados.filter((e) => e.id === 36)[0];

let conteudo = '';

const container = document.getElementById("container");

/*for (let i = 0; i < dados.length; i++){
    let atleta = dados[i]; */

    const montaCard = (atleta) => ` 
        <div id='quadradinho'>
        <h2>${atleta.nome}</h2>
        <img src=${atleta.imagem}>
        <p id='detalhes'>${atleta.detalhes}</p>
        </div>
    `;

dados.forEach((atleta) => conteudo += montaCard(atleta))

container.innerHTML = conteudo;