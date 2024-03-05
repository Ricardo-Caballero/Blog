$(document).ready(function(){
    //1.- primero ejecutar el evento del scroll
    //2.- Calcular el ancho de la pantalla


    $(window).scroll(function(){
        var windowWidth = $(window).width();

        if(windowWidth > 800){
            //calcular la posición del scroll y guardarla en una variable
            var scroll = $(window).scrollTop();

            //hace que el texto avance hacia abajo
            $('header .textos').css({
                'transform': 'translate(0px,' + scroll / 2 + '%)'
            });

            //hace que el article se mueva hacia arriba con el signo de menos
            $('.acerca-de article').css({
                'transform': 'translate(0px, -' + scroll / 4 + '%)'
            });

        }
    });
    //cada vez de que haya un cambio o resize en el tamaña de la pantalla
    $(window).resize(function(){
        var windowWidth = $(window).width();
        if(windowWidth < 800){
            $('.acerca-de article').css({
                'transform': 'translate(0px,0px'
            });
        }
    })
});