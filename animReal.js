// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");
var lyrics2 = document.querySelector("#lyrics2");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Te vi", time: 10 },
  { text: "Unos ojos perfectos labios dispuestos a mí", time: 12 },
  { text: "Unas manos tan suaves manos sinceras para mí", time: 18 },
  { text: "Y que de tanto mirarte comienzo a admirarte", time: 23 },
  { text: "Y así", time: 26 },
  { text: "Me trago mi orgullo y empiezo a acercarme a ti", time: 28 },
  { text: "Te doy las gracias a ti", time: 34 },
  { text: "Por hacerme entender", time: 39 },
  { text: "Que existe el amor", time: 41 },
  { text: "AMOR A PRIMERA VISTA", time: 43 },
  { text: "Amor que llega y no te avisa es el mejor tipo de amor", time: 45 },
  { text: "AMOR A PRIMERA VISTA", time: 54 },
  { text: "De ese amor que te esclaviza, que te hipnotiza", time: 56 },
  { text: "Tú me haces creer... En ese amor", time: 61 },
];

var loveData = [
  { text: "Responsable", time: 1 },
  { text: "Perdonadora", time: 2 },
  { text: "Entretenida", time: 3 },
  { text: "Tu aroma", time: 4 },
  { text: "Tu aroma natural", time: 5 },
  { text: "Afectuosa", time: 6 },
  { text: "Perfecta", time: 7 },
  { text: "Amorosa", time: 8 },
  { text: "Digna", time: 9 },
  { text: "Haces todo lo posible por mí", time: 10 },
  { text: "Tu cuerpo", time: 11 },
  { text: "Tu calma", time: 12 },
  { text: "Tu existencia", time: 13 },
  { text: "Dulce", time: 14 },
  { text: "Valiente", time: 15 },
  { text: "Inteligente", time: 16 },
  { text: "Tienes un alma tan dulce", time: 17 },
  { text: "Hablas increíble", time: 18 },
  { text: "Me haces sentir seguro", time: 19 },
  { text: "Sacas a relucir mi pequeño yo", time: 20 },
  { text: "Tu sabiduría", time: 21 },
  { text: "Te das cuenta de las pequeñas cosas sobre mí", time: 22 },
  { text: "Generosa", time: 23 },
  { text: "Orgullosa", time: 24 },
  { text: "Nunca dudas de mí", time: 25 },
  { text: "Dadora", time: 26 },
  { text: "Enérgica", time: 27 },
  { text: "Talentosa", time: 28 },
  { text: "Regalo de Dios", time: 29 },
  { text: "Eres mi mundo", time: 30 },
  { text: "Eres por quien oraba", time: 31 },
  { text: "Oras por mí", time: 32 },
  { text: "Alentadora", time: 33 },
  { text: "Extrovertida", time: 34 },
  { text: "Tu entusiasmo", time: 35 },
  { text: "La forma en que me miras", time: 36 },
  { text: "Las cosas que he aprendido de ti", time: 37 },
  { text: "Tu compromiso", time: 38 },
  { text: "Eres tan especial", time: 39 },
  { text: "Un ángel", time: 40 },
  { text: "Excepcional", time: 41 },
  { text: "Educada", time: 42 },
  { text: "Adorable", time: 43 },
  { text: "Tú siendo tú", time: 44 },
  { text: "Tu afecto", time: 45 },
  { text: "Nuestra primera cita", time: 46 },
  { text: "Tus acciones", time: 47 },
  { text: "Tú cuando me miras", time: 48 },
  { text: "Tú maquillada", time: 49 },
  { text: "Tú sin maquillar", time: 50 },
  { text: "Tus bromas", time: 51 },
  { text: "Tu suave voz reconfortante", time: 52 },
  { text: "Nunca te rindes", time: 53 },
  { text: "Nuestras charlas nocturnas", time: 54 },
  { text: "Tu soplando a la comida", time: 55 },
  { text: "Tú durmiendo", time: 56 },
  { text: "Nuestros abrazos", time: 57 },
  { text: "Hacemos un buen equipo", time: 58 },
  { text: "Aventurera", time: 59 },
  { text: "Me hiciste sentir importante", time: 60 },
  { text: "Hiciste todo por mí", time: 61 },
  { text: "Tus orejitas", time: 62 },
  { text: "Tu alegría", time: 63 },
  { text: "Tus palabras de afirmación", time: 64 },
  { text: "Sabes todo sobre mí", time: 65 },
  { text: "Siempre estás ahí para mí cuando lo necesito", time: 166 },
  { text: "Tu forma de cocinar", time: 167 },
  { text: "Tu seriedad", time: 168 },
  { text: "Eres maravillosa", time: 169 },
  { text: "Tu tranquilidad", time: 70 },
  { text: "Tus logros", time: 71 },
  { text: "Tus gestos", time: 72 },
  { text: "Tu acogedor abrazo", time: 73 },
  { text: "Eres inspiradora", time: 74 },
  { text: "Hiciste tanto por mí", time: 75 },
  { text: "Me cambiaste de una buena manera", time: 76 },
  { text: "Me amaste a pesar de todos mis errores", time: 77 },
  { text: "Me diste muchas oportunidades", time: 78 },
  { text: "Me amaste a través de todo", time: 79 },
  { text: "Tu ternura", time: 80 },
  { text: "Tus palabras", time: 81 },
  { text: "Tu consuelo", time: 82 },
  { text: "Tu compañía", time: 83 },
  { text: "Tu preocupación por mí", time: 84 },
  { text: "Te encanta ir a nuevos lugares", time: 85 },
  { text: "Eres lo mejor que me ha pasado", time: 86 },
  { text: "Eres cuidadosa", time: 87 },
  { text: "Tu aceptación", time: 88 },
  { text: "Eres increíble", time: 89 },
  { text: "Tu calma", time: 90 },
  { text: "Eres educada", time: 91 },
  { text: "Eres adorable", time: 92 },
  { text: "Eres generosa", time: 93 },
  { text: "Tu amabilidad con los demás", time: 94 },
  { text: "Tu coraje", time: 95 },
  { text: "Eres tú", time: 96 },

  { text: "Eres cuidadosa", time: 97 },
  { text: "Tu aceptación", time: 98 },
  { text: "Eres increíble", time: 99 },
  { text: "Tu calma", time: 200 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 3.5
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
