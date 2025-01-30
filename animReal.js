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
