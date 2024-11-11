const jogadora = document.getElementById('jogadora')
const img = document.getElementById('imagem')
const descricao = document.getElementById('descricao')

const pega_json = async (caminho) => {
    const resposta = await fetch(caminho);
    const dados = await resposta.json();
    return dados;
}
// atleta = dados.filter((e) => e.id === 36)[0];

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
        
        
 

pega_json('https://botafogo-atletas.mange.li/2024-1/all').then(
    (retornar) => {
        retornar.forEach((atleta) => montaCard(atleta))
        console.log("Isso imprime depois")

    }
)

console.log("Isso imprime antes");

const verificaSenha =() => {
    const entrada = document.getElementById('senha').value;
    const hash_senha = '202447d44ce12531f7207cb33b6bf7';
    if (hash_senha === hex_md5(entrada)){
        sessionStorage.setItem('logado', 'sim');
        alert("Logado");
    } else {
        alert("Senha incorreta.");
    }
}
document.getElementById('logout').onCick = () => {sessionStorage.removeItem("Logado"); alert("Saiu")}