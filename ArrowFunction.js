/*
As arrow functions, introduzidas no ECMAScript 6 (ES6), oferecem uma sintaxe mais curta e direta para escrever funções em JavaScript, utilizando a "seta" (=>). Elas não têm seu próprio contexto de this, herdando-o do escopo em que foram definidas, o que ajuda a evitar problemas comuns ao trabalhar com callbacks e métodos de objetos. A sintaxe compacta elimina a necessidade de escrever a palavra-chave function, resultando em um código mais limpo e legível.

Além disso, as arrow functions não podem ser usadas como construtores e não têm acesso aos objetos arguments, super, e new.target. Isso as torna menos versáteis em certos casos, mas para a maioria das situações, especialmente em callbacks e funções de ordem superior, elas são extremamente úteis devido à simplicidade e previsibilidade do escopo de this. Essas características fazem das arrow functions uma ferramenta popular no desenvolvimento moderno em JavaScript.


*/ 




/* Solicita ao usuário uma lista de valores, dobra cada valor e exibe o resultado */
const DobrarValores = () => {
    const valoresInpt = prompt("Coloque separadamente os valores a serem dobrados!");
    const numeros = valoresInpt.split(",").map(valor => parseFloat(valor));
    const resultado = numeros.map(valor => valor * 2);
    alert("valores Dobrados:" + resultado);
};


/* Solicita ao usuário uma lista de palavras, ordena-as pelo comprimento e exibe o resultado */
const ordenarComprimento = () => {
    const valoresInpt = prompt("Coloque separadamente as palavras a serem ordenadas!");
    const palavras = valoresInpt.split(",");
    const resultado = palavras.sort((a, b) => a.length - b.length);
    alert("Palavras Ordenadas Por Comprimento:" + resultado);
};


/* Solicita ao usuário uma lista de valores, filtra os números pares e exibe o resultado */
const filtrarPares = () => {
    const valoresInpt = prompt("Coloque separadamente os valores pares a serem filtrados!");
    const numeros = valoresInpt.split(",").map(valor => parseInt(valor));
    const resultado = numeros.filter(numero => numero % 2 === 0);
    alert("Filtrar Pares:" + resultado);
};


