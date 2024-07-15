document.addEventListener('DOMContentLoaded', function () {
    //carousel

    var myCarousel = new bootstrap.Carousel(document.getElementById('carouselPlatos'), {
        interval: false
    });


    //tooltips
    
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    });


});

$(document).ready(function() {
    $("#enviarCorreo").click(function() {
        alert("El correo fue enviado correctamente...");
    });

    $('h3').on('dblclick', function() {
        if ($(this).text() === "INGREDIENTES" || $(this).text() === "PREPARACIÓN") {
            $(this).toggleClass('red-text');
        }
    });

    $('.recipe-card .card-title').on('click', function() {
        $(this).siblings('.card-content').toggle();
    });

});