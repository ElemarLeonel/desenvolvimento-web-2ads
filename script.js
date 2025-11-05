// Capturar um elementor por um seletor qualquer
// const paragrafo = document.querySelector(".resultado-nome");

// Capturar um elemento pelo ID
const paragrafo2 = document.getElementById("resultado-nome");

// Capturar N elementos por um seletor
// const paragrafos = document.querySelectorAll("p");

const botaoNome = document.getElementById("botao-nome");
let nome = "Elemar";
const nomes = ["Elemar", "João", "Pedro"];

document.addEventListener("load", function(){
    alert("Carreguei");
})

// Evento click
botaoNome.addEventListener("click", function(){
//    alert(`Cheguei nesse botão! Eu sou ${nome}`);
    nomes.forEach(nome => {
        alert(`Eu sou ${nome}`);
    })

    // Concatenando os nomes e separando por vírgula
    const resultado = nomes.join(", ");

    // Validação pelo nome "João" dentro do array
    if(nomes.includes("João")){
        // Alterando a cor de fundo do parágrafo para azul
        paragrafo2.style.backgroundColor = "blue";
        // Alterando a cor do texto do parágrafo para branco
        paragrafo2.style.color = "white";
    }

    // Escrevendo o texto dentro do parágrafo
    paragrafo2.textContent = resultado;
})