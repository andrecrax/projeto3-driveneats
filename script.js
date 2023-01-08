function mealSelector(elemento){
    const oldBottom = document.querySelector('.meal .selecionado');
    if(oldBottom !== null){
        oldBottom.classList.remove("selecionado");      
    }
    elemento.classList.add("selecionado");
    finishOrder();
}
function drinkSelector(elemento){
    const oldBottom = document.querySelector('.drinks .selecionado');
    if(oldBottom !== null){
        oldBottom.classList.remove("selecionado");      
    }
    elemento.classList.add("selecionado");
    finishOrder();
}

function dessertSelector(elemento){
    const oldBottom = document.querySelector('.dessert .selecionado');
    if(oldBottom !== null){
        oldBottom.classList.remove("selecionado");      
    }
    elemento.classList.add("selecionado");
    finishOrder();
}

function finishOrder(){
    const selectedElements = document.querySelectorAll('.selecionado');
    const button = document.querySelector('.finalizar');
    if (selectedElements.length === 3) {
      button.classList.add("teste");
      button.innerHTML = "Fechar pedido";
    }
  }
  