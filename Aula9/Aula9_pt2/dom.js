const jogadora = document.getElementById('jogadora')
const img = document.getElementById('imagem')
const descricao = document.getElementById('descricao')

const pega_json = async (caminho) => {
    const resposta = await fetch(caminho);
    const dados = await resposta.json();
    return dados;
}
// atleta = dados.filter((e) => e.id === 36)[0];

const manipulaClick = (e) => {
    const id = e.currentTarget.dataset.id;
    const nome = e.currentTarget.dataset.nome;
    document.cookie = `id=${id}`;
    document.cookie = `nome=${nome}`;

    sessionStorage.setItem('id', id)
    sessionStorage.setItem('atleta', JSON.stringify(e.currentTarget.dataset))

    localStorage.setItem('id', id)
    localStorage.setItem('atleta', JSON.stringify(e.currentTarget.dataset))

    window.location = `detalhes.html?id=${id}`
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
        const span_id = document.createElement("span")

        nome.innerHTML = atleta.nome;
        cartao.appendChild(nome);

        imagem.src = atleta.imagem;
        cartao.appendChild(imagem);

        descri.innerHTML = atleta.detalhes;
        cartao.appendChild(descri);

        // link.innerHTML = "Saiba mais...";
        // link.href =`detalhes.html?id=${atleta.id}`;
        // cartao.appendChild(link);

        cartao.dataset.id = atleta.id;
        cartao.dataset.nome = atleta.nome;
        cartao.dataset.nascimento = atleta.nascimento;



        span_id.innerText = atleta.id
        cartao.appendChild(span_id)

        cartao.onclick = manipulaClick;

        container.appendChild(cartao)

    }

pega_json('https://botafogo-atletas.mange.li/2024-1/all').then(
    (retornar) => {
        retornar.forEach((atleta) => montaCard(atleta))
        console.log("Isso imprime depois")

    }
)

console.log("Isso imprime antes");