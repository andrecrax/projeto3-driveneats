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
var precoComida = "";

for (var i = 0; i < texto.length; i++) {
    if (/[\d,]/.test(texto[i])) {
    if (texto[i] === "," || (texto[i] === "." && texto[i-1] !== ",")) {
        precoComida += ",";
      } else {
        precoComida += texto[i];
      }
    }
}

    var bebida = document.querySelector(".drinks .selecionado h3").textContent;
    var texto = document.querySelector(".drinks .selecionado h4").innerHTML;
    var precoBebida = "";
    
    for (var i = 0; i < texto.length; i++) {
        if (/[\d,]/.test(texto[i])) {
        if (texto[i] === "," || (texto[i] === "." && texto[i-1] !== ",")) {
            precoBebida += ",";
          } else {
            precoBebida += texto[i];
          }
        }
    }
    var sobremesa = document.querySelector(".dessert .selecionado h3").textContent;
    var texto = document.querySelector(".dessert .selecionado h4").innerHTML;
var precoSobremesa = "";

for (var i = 0; i < texto.length; i++) {
    if (/[\d,]/.test(texto[i])) {
    if (texto[i] === "," || (texto[i] === "." && texto[i-1] !== ",")) {
        precoSobremesa += ",";
      } else {
        precoSobremesa += texto[i];
      }
    }
}
precoSobremesa = precoSobremesa.replace(",",".");
precoComida = precoComida.replace(",",".");
precoBebida = precoBebida.replace(",",".");

precoFinal = parseFloat(precoBebida) + parseFloat(precoComida) + parseFloat(precoSobremesa);

    var text = encodeURIComponent("Olá, gostaria de fazer o pedido:\n- Prato: "+ comida + "\n- Bebida: " + bebida + "\n- Sobremesa: " + sobremesa + "\nTotal: R$ " + precoFinal);
    var url = "https://wa.me/1234567890?text=" + text;
    window.open(url, "_blank");
  }