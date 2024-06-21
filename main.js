let nomeUsúario = "";
let elemento = document.querySelector("#nome-usúario");

while(nomeUsúario == ""){
    nomeUsúario = prompt("Qual o seu nome?");
}

if(nomeUsúario == null){
    elemento.textContent = "seja muito bem vindo!";
}else{
    elemento.textContent = nomeUsúario;
}

