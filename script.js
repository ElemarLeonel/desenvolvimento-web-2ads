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

botaoNome.addEventListener("click", function(){
//    alert(`Cheguei nesse botão! Eu sou ${nome}`);
    nomes.forEach(nome => {
        alert(`Eu sou ${nome}`);
    })

    const resultado = nomes.join(", ");

    if(nomes.includes("João")){
        paragrafo2.style.backgroundColor = "blue";
        paragrafo2.style.color = "white";
    }

    paragrafo2.textContent = resultado;
})