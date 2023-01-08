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
      button.disabled = false;
      button.classList.add("fechar");
      button.innerHTML = "Fechar pedido";
    }
  }
  function sendWhatsAppMessage() {
    var text = encodeURIComponent("Olá, gostaria de fazer o pedido:\n- Prato: Frango Yin Yang\n- Bebida: Coquinha Gelada\n- Sobremesa: Pudim\nTotal: R$ 27,70");
    var url = "https://wa.me/1234567890?text=" + text;
    window.open(url, "_blank");
  }