console.log(2+2);
console.log("casa"+2);
console.log("casa"+"amarela");
console.log("casa"+2);
console.log("casa"+"2");
console.log(1 + "2");
console.log(1 + "2" == 12);

const meuObjeto = {
    nome : "Eduardo",
    idade : 48
  }
  
  console.log(meuObjeto.nome)
  console.log(meuObjeto.idade)
  console.log(meuObjeto.endereco)
  console.log(meuObjeto.numero)

  function nomeDaFuncao (x, y) {
    return x + y
}
const func2 = function (a, b) {
    return a * b
}
const func3 = (entrada) => {
    return entrada + ' é bonito'
}
const func4 = entrada => entrada + ' é bonito'

const minha_lista = [25, 'casa', [34,12], 9.65]

const funcaoComNome = elemento => console.log(elemento);
minha_lista.forEach(funcaoComNome);