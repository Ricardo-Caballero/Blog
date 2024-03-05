$(document).ready(function(){
//efecto de los botones para que bajen uno por uno 
//es lo que permite la función .each() el efecto se le aplica a uno por uno y
// no a todos juntos
    $('.menu a').each(function(index,elemento){
        $(this).css({
            'top':'-200px'
        });
        $(this).animate({
            top: '0'
            //index representa la posición de los botones
            //al iniciar vale al primer boton en la posición cero
        }, 2000 + (index * 500));

        //EFECTO HEADER

        if($(window).width() > 800){
            $('header .textos').css({
                opacity: 0,
                marginTop: 0
            });

            $('header .textos').animate({
                opacity: 1,
                marginTop: '-52px'
            }, 1500);
        }

        // Scroll Elementos Acerca de cuando demos click al menu 'acerca-de'
        var acercaDe = $('#acerca-de').offset().top;
        var menu = $('#platillos').offset().top;
        var galeria = $('#galeria').offset().top;
        var ubicacion = $('#ubicacion').offset().top;

        $('#btn-acerca-de').on('click', function(e){
            e.preventDefault();
            $('html, body').animate({
                //acceder al scroll
                scrollTop: acercaDe -100
            },500);
        });

        $('#btn-menu').on('click').on('click', function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop: menu
            }, 500);
        });

        $('#btn-galeria').on('click', function(e){
            e.preventDefault();
            $('html, body').animate({
                scrollTop: galeria
            }, 500);
        });

        $('#btn-ubicacion').on('click', function(e){
            e.preventDefault();
            $('html,body').animate({
                scrollTop: ubicacion
            }, 500);
        });




    });
});