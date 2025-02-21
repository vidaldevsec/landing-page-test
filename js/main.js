var Leonardo = window.document.getElementById("leonardo")
var Samantha = window.document.getElementById("samantha")
var Bruna = window.document.getElementById("bruna")
var setaEsquerda = window.document.getElementById("seta-esquerda")
var setaDireita = window.document.getElementById("seta-direita")

function rolarParaDireita(){
    Leonardo.style = "display: none"
    Bruna.style = "display: flex"
    setaEsquerda.style = "display: flex; margin-top: 55px"
    setaDireita.style = "display: none"
}

function rolarParaEsquerda(){
    Leonardo.style = "display: flex"
    Bruna.style = "display: none"
    setaEsquerda.style = "display: none"
    setaDireita.style = "display: flex"
}