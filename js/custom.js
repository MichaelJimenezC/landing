
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
    // Obtener el valor del parámetro "plan" de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const selectedPlan = urlParams.get('plan');

    // Comprobar qué plan se ha seleccionado y marcarlo como seleccionado
    if (selectedPlan === 'fitmi') {
        document.getElementById('flexRadioDefault1').checked = true;
    } else if (selectedPlan === 'hercules') {
        document.getElementById('flexRadioDefault2').checked = true;
    } else if (selectedPlan === 'immortal') {
        document.getElementById('flexRadioDefault3').checked = true;
    }
});


