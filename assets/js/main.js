$(document).ready(function () {
    function crearCorazon() {
    const corazon = document.createElement("div");
    corazon.classList.add("corazon");
    corazon.innerHTML = "❤";

    // Posición horizontal aleatoria
    corazon.style.left = Math.random() * 100 + "vw";

    // Tamaño aleatorio
    corazon.style.fontSize = (Math.random() * 20 + 15) + "px";

    // Duración aleatoria de caída
    corazon.style.animationDuration = (Math.random() * 3 + 3) + "s";

    document.querySelector(".lluvia-corazones").appendChild(corazon);

    // Eliminar después de caer
    setTimeout(() => {
        corazon.remove();
    }, 6000);
}

// Crear corazones infinitamente
setInterval(crearCorazon, 300);

    // mostrar otra 
    $('.left-curtain').css('width', '0%');
    $('.right-curtain').css('width', '0%');

    $('.valentines-day').click(function () {
        // Animacin
        $('.envelope').css({ 'animation': 'fall 3s linear 1', '-webkit-animation': 'fall 3s linear 1' });
        $('.envelope').fadeOut(800, function () {
            // ocultar
            $('.valentines-day .heart, .valentines-day .text, .valentines-day .front').hide();

            // carta
            $('#card').css({ 'visibility': 'visible', 'opacity': 0, 'transform': 'scale(0.1)' });
            $('#card').animate({ 'opacity': 1 }, {
                duration: 1000, step: function (now, fx) {
                    var scale = 1 + Math.sin(now * Math.PI) * 0.1;
                    $(this).css('transform', 'scale(' + scale + ')');
                }
                //animacion 2
            }); 
        });
    });
}); 
$('#btnMusica').click(function() {
    var musica = document.getElementById("miMusica");

    if (musica.paused) {
        musica.play();
        $(this).text("⏸ Pausar canción");
    } else {
        musica.pause();
        $(this).text("🎵 Escuchar canción");
    }
});