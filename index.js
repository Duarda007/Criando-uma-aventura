const avanca = document.querySelectorAll("btn-proximo");

avanca.forEach(button=>{  
button.addEventListener("click",function(){
const atual = document.querySelector(".ativo");
 const proximoPaso ="passo-" + this.getAtribuur("data-proximo");
 atual.classList.remove("ativo");
 document.getElementById(proximoPaso).classList.add("ativo");
  })
})


