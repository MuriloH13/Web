function bla() {
    console.log('log de outro arquivo')
    b=document.querySelector("button:nth-child(4)")
    b.innerHtml="click em mim"
    b.addEventListener("click", bla)
}

// document.getElementById("botao1")
// <button id=​"botao1" onclick>​ Botão 1​</button>​
// document.querySelector("botao")
// null
// let botao = document.querySelector("#botao2")
// undefined
// document.querySelector("#botao2")
// <button id=​"botao2" onclick>​ Botão 2​</button>​
// document.querySelector("button")
// <button id=​"botao1" onclick>​ Botão 1​</button>​
// botao
// <button id=​"botao2" onclick>​ Botão 2​</button>​
// botao.style.backgroundColor="red"
// 'red'
// botao.style.backgroundColor="pink"
// 'pink'