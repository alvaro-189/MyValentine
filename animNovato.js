// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");
var lyrics2 = document.querySelector("#lyrics2");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Dame tu dedo índice, ponlo detrás de mi oído", time: 22 },
  { text: "Dime, ¿sientes el latido?", time: 27 },
  { text: "Tantas personas llegaron, pero nadie con tu estilo", time: 34 },
  { text: "Eres un laberinto", time: 38 },
  { text: "Mi manantial, mi voz, mi ritmo, mi raíz", time: 42 },
  { text: "Mi rato de felicidad", time: 45.5 },
  { text: "Devoto por la eternidad a ti, a ti", time: 49 },
  { text: "Estorbarme, moléstame", time: 57 },
  { text: "Por na' dejo 'e quererte", time: 60 },
  { text: "Eres tan especial", time: 62 },
  { text: "Tú eres tan especial", time: 65 },
  { text: "TE AMO ❤", time: 67 },
];

var loveData = [
  { text: "Tus bromas", time: 1 },
  { text: "Tu suave voz reconfortante", time: 2 },
  { text: "Nunca te rindes", time: 3 },
  { text: "Nuestras charlas nocturnas", time: 4 },
  { text: "Tu soplando a la comida", time: 5 },
  { text: "Tú durmiendo", time: 6 },
  { text: "Nuestros abrazos", time: 7 },
  { text: "Hacemos un buen equipo", time: 8 },
  { text: "Aventurera", time: 9 },
  { text: "Me hiciste sentir importante", time: 10 },
  { text: "Hiciste todo por mí", time: 11 },
  { text: "Tus orejitas", time: 12 },
  { text: "Tu alegría", time: 13 },
  { text: "Tus palabras de afirmación", time: 14 },
  { text: "Sabes todo sobre mí", time: 15 },
  { text: "Siempre estás ahí para mí cuando lo necesito", time: 11 },
  { text: "Tu forma de cocinar", time: 17 },
  { text: "Tu seriedad", time: 18 },
  { text: "Eres maravillosa", time: 19 },
  { text: "Tu tranquilidad", time: 20 },
  { text: "Tus logros", time: 21 },
  { text: "Tus gestos", time: 22 },
  { text: "Tu acogedor abrazo", time: 23 },
  { text: "Eres inspiradora", time: 24 },
  { text: "Hiciste tanto por mí", time: 25 },
  { text: "Me cambiaste de una buena manera", time: 26 },
  { text: "Me amaste a pesar de todos mis errores", time: 22 },
  { text: "Me diste muchas oportunidades", time: 28 },
  { text: "Me amaste a través de todo", time: 29 },
  { text: "Tu ternura", time: 30 },
  { text: "Tus palabras", time: 31 },
  { text: "Tu consuelo", time: 32 },
  { text: "Tu compañía", time: 33 },
  { text: "Tu preocupación por mí", time: 34 },
  { text: "Te encanta ir a nuevos lugares", time: 35 },
  { text: "Eres lo mejor que me ha pasado", time: 36 },
  { text: "Eres cuidadosa", time: 37 },
  { text: "Tu aceptación", time: 33 },
  { text: "Eres increíble", time: 39 },
  { text: "Tu calma", time: 40 },
  { text: "Eres educada", time: 41 },
  { text: "Eres adorable", time: 42 },
  { text: "Eres generosa", time: 43 },
  { text: "Tu amabilidad con los demás", time: 44 },
  { text: "Tu coraje", time: 45 },
  { text: "Eres tú", time: 46 },

  { text: "Eres cuidadosa", time: 47 },
  { text: "Tu aceptación", time: 48 },
  { text: "Eres increíble", time: 49 },
  { text: "Tu calma", time: 50 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 4
  );
  var currentLine2 = loveData.find(
    (line) => time >= line.time && time < line.time + 2
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.01; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
  if (currentLine2) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.01; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine2.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics2.style.opacity = opacity;
    lyrics2.innerHTML = currentLine2.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics2.style.opacity = 0;
    lyrics2.innerHTML = "";
  }
}

setInterval(updateLyrics, 800);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);
