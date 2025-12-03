// alert("Hello world!")

var teste = "oi"
var ligado = true
var idade = 22

if(ligado){
    console.log("Ligado")
}else{
    console.log("Desligado")
}

var i = 1

while(true){
    console.log("*")
    i++

    if(i = 5){
        break
    }

}

// -----------------------------------------------------
// conteudo 

// GETELEMENT - BUSCA O ELEMENTO E NO PROPRIO SELETOR É DITO O TIPO
var titulo = document.getElementById("titulo").innerText

// QUERYSELECTOR - BUSCA O ELEMENTO E É NECESSARIO DIZER O TIPO *SELETORES DO CSS
document.querySelector("#caixa").innerText = "PROPAGANDA"

document.querySelector("#testes").addEventListener("focusOut" , () => {
    alert("FRONT É TOP");

    var caixaAparecer = document.querySelector("#testes").value
    if(caixaAparecer == "aparecer"){
        document.querySelector("#caixa").style.display = "flex"
    }
})

document.querySelector("#caixa").addEventListener("click", fechaCaixa);
function fechaCaixa(){
    document.querySelector("#caixa").style.display = "none"
}