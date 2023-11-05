
  (function ($) {
  
  "use strict";

    // MENU
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });
    
    // CUSTOM LINK
    $('.smoothscroll').click(function(){
      var el = $(this).attr('href');
      var elWrapped = $(el);
      var header_height = $('.navbar').height();
  
      scrollToDiv(elWrapped,header_height);
      return false;
  
      function scrollToDiv(element,navheight){
        var offset = element.offset();
        var offsetTop = offset.top;
        var totalScroll = offsetTop-navheight;
  
        $('body,html').animate({
        scrollTop: totalScroll
        }, 300);
      }
    });
  
  })(window.jQuery);

  document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const selectedPlan = urlParams.get('plan');

    if (selectedPlan === 'fitmi') {
        document.getElementById('flexRadioDefault1').checked = true;
    } else if (selectedPlan === 'hercules') {
        document.getElementById('flexRadioDefault2').checked = true;
    } else if (selectedPlan === 'immortal') {
        document.getElementById('flexRadioDefault3').checked = true;
    }
});
$(document).ready(function() {
  $("a[href='#nav-ContactMap-tab']").click(function() {
      $('#nav-ContactMap-tab').tab('show');

  });
});
document.addEventListener("DOMContentLoaded", function () {
  const radioButtons = document.querySelectorAll('input[name="TicketForm"]');
  const subtotalElement = document.getElementById("subtotal");
  const totalElement = document.getElementById("total");
  function actualizarPrecios() {
      let precio = 0;
      for (const radioButton of radioButtons) {
          if (radioButton.checked) {
              if (radioButton.id === "flexRadioDefault1") {
                  precio = 120;
              } else if (radioButton.id === "flexRadioDefault2") {
                  precio = 240;
              } else if (radioButton.id === "flexRadioDefault3") {
                  precio = 480;
              }
              break;
          }
      }
      subtotalElement.textContent = `$${precio}`;
      totalElement.textContent = `$${precio}`;
  }
  actualizarPrecios();
  for (const radioButton of radioButtons) {
      radioButton.addEventListener("change", actualizarPrecios);
  }
});


// Espera a que el documento esté listo
$(document).ready(function () {
  // Maneja el clic en el botón "Comprar"
  $('#checkout-Comprar').click(function () {
    // Validar si todos los campos están llenos
    if (validarCampos()) {
      // Cierra el modal de pago
      $('#paymentModal').modal('hide');

      // Abre el modal de agradecimiento
      $('#agradecimientoModal').modal('show');
    } else {
      // Muestra una alerta o mensaje de error
      alert('Por favor, complete todos los campos antes de continuar.');
    }
  });

  // Función para validar que todos los campos estén llenos
  function validarCampos() {
    // Comprueba si todos los campos obligatorios están llenos
    var cardNumber = $('#cardNumber').val();
    var nameOnCard = $('#nameOnCard').val();
    var expiryDate = $('#expiryDate').val();
    var cvvCode = $('#cvvCode').val();
   

    return cardNumber && nameOnCard && expiryDate && cvvCode  ;
  }
});
$(document).ready(function () {
  // Maneja el clic en el botón "Comprar"
  $('#btn_comprar').click(function (e) {
    // Evita el envío del formulario por defecto
    e.preventDefault();

    // Validar si todos los campos obligatorios, excepto el textarea, están llenos
    if (validarCampos()) {
      // Cierra el modal de agradecimiento si está abierto
      $('#agradecimientoModal').modal('hide');

      // Abre el modal de pago
      $('#paymentModal').modal('show');
    } else {
      // Muestra una alerta o mensaje de error
      alert('Por favor, complete todos los campos obligatorios antes de continuar.');
    }
  });

  // Función para validar que todos los campos obligatorios, excepto el textarea, estén llenos
  function validarCampos() {
    var nombre = $('#ticket-form-name').val();
    var email = $('#ticket-form-email').val();
    var telefono = $('#ticket-form-phone').val();

    return nombre && email && telefono ;
  }
});
document.getElementById('btn-cerrar-modal').addEventListener('click', function() {
  // Redirigir a index.html
  window.location.href = '../index.html';
});