$(document).ready(function(){
   scrollSobre();
   scrollPalestrantes();
   scrollFormulario();
});

function scrollSobre(){
    $(".menu-sobre").click(function(){
        var posicaoSobre = $(".about").offset().top;
        $("html, body").animate(
            {
                scrollTop: posicaoSobre
            }, 1000)
                    
    });
}

function scrollPalestrantes(){
    $(".menu-palestrantes").click(function(){
        var posicaoPalestrante = $(".info-palestrantes").offset().top;
        $("html, body").animate(
            {
                scrollTop: posicaoPalestrante
            }, 1000)
                    
    });
}

function scrollFormulario(){
    $(".botao-formulario").click(function(){
        var posicaoFormulario = $(".formulario").offset().top;
        $("html, body").animate(
            {
                scrollTop: posicaoFormulario
            }, 1000)
                    
    });
}


/* solução Alura (para referência)
Link entre botões e seções feito no html

function ativaScrollSuave(selector) {

    $(selector).click(function(event){
        event.preventDefault();

        var target = $(this).attr('href');

        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000);  
    });
}

ativaScrollSuave('a[href*=panel-about]');
ativaScrollSuave('a[href*=panel-speakers]');
ativaScrollSuave('a[href*=panel-form]');*/

