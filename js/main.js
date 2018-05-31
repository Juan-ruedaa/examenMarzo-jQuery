

let $p;
let anadirEfectosH3 = function () {
    $(".example h3").first().attr("id","Rueda")
    .fadeOut(500)
    .fadeIn(2000)
    .click(function(){
        $(this).fadeOut(500)
        .fadeIn(2000)
    })
    .append(". Juan Rueda Morales");
}

let clickBoton0 = function(){
    $(".domtree h3").first()
    .slideToggle(500)
    .slideToggle(1000);
}

let clickBoton1 = function(){
    $("ul li") .fadeOut(500)
    .fadeIn(1000)
}

let clickBoton2 = function(){
    $("ul li ul li").slideToggle(500)
    .slideToggle(500);
}


let clickBoton3 = function(){
    let altura = $p.height();
    let anchura = $p.width();

    $p.animate({width:0}, 1000)
    .animate({width:anchura, height:altura},1000);
}

let clickBoton4 = function(){
    $('option:checked').css({'background': 'green'});
    $('select option').on('click', clickBoton4);
}

let clickBoton5 = function(){
   $("code").addClass("highlight")
    .animate({'padding': '5px'});
}

let solicitarAjax = function(){
    $.get('datos.php',function(data){
        $("#customInput").html(data);
    })
}


$.fn.plugin = function(opciones){ 

    const config = $.extend({
        fondo: "yellow",
        altura: $(this).height() * 1.40,
        fuente: "5rem"
    }, opciones)

    return this.css({
        backgroundColor: config.fondo
    })

    .on("click", function () {
        $(this)
            .css("height", config.altura)
            .css("fontSize", config.fuente);
    })
    .on("dblclick", function () {
        $(this).css("height", "initial")
        .css("fontSize", "initial");
    });
}    

$(function($){
    $p = $(".domtree p").first();

    $("h1").html("Examen jQuery. Marzo de 2018. Juan Rueda Morales"); //colocar nombre en el H1

    anadirEfectosH3(); //colocar efectos al H3 del mensaje de bienvenida

    $("#customInput").html("Juan Rueda Morales");

    /*$(".content input")[0].addEventListener("click", clickBoton0);
    $(".content input")[1].addEventListener("click", clickBoton1);
    $(".content input")[2].addEventListener("click", clickBoton2);
    $(".content input")[3].addEventListener("click", clickBoton3);
    $(".content input")[4].addEventListener("click", clickBoton4);
    $(".content input")[5].addEventListener("click", clickBoton5);*/

    let funciones = [clickBoton5,clickBoton4, clickBoton3, clickBoton2, clickBoton1, clickBoton0];

    $(".content input").each(function(index,element){
        $(this).on("click", funciones.pop());
    })

    

    

    $("#toggleCustom").click(solicitarAjax);

    $(".domtree>h3").plugin();

    //let alturaPred =  $("#miId").css("fontSize").substr(0,2) * 6

    $("#miId").plugin({
        fondo: "red",
        altura: "100%",
        fuente: "6rem"
    });


    
});    
