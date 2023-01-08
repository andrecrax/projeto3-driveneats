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
    var comida = document.querySelector(".meal .selecionado h3").textContent;
    var texto = document.querySelector(".meal .selecionado h4").innerHTML;

    precoComida = texto.replace("R$ ","");
    precoComida = precoComida.replace(",", ".");

    var bebida = document.querySelector(".drinks .selecionado h3").textContent;
    var texto = document.querySelector(".drinks .selecionado h4").innerHTML;
    precoBebida = texto.replace("R$ ","");
    precoBebida = precoBebida.replace(",", ".");
 
    var sobremesa = document.querySelector(".dessert .selecionado h3").textContent;
    var sobremesa = document.querySelector(".dessert .selecionado h4").innerHTML;
    precoSobremesa = sobremesa.replace("R$ ","");
    precoSobremesa = precoSobremesa.replace(",", ".");

precoFinal = parseFloat(precoBebida) + parseFloat(precoComida) + parseFloat(precoSobremesa);

    var text = encodeURIComponent("Olá, gostaria de fazer o pedido:\n- Prato: "+ comida + "\n- Bebida: " + bebida + "\n- Sobremesa: " + sobremesa + "\nTotal: R$ " + precoFinal.toFixed(2));
    var url = "https://wa.me/1234567890?text=" + text;
    window.open(url, "_blank");
  }