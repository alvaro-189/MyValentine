// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");
var lyrics2 = document.querySelector("#lyrics2");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "y si fueras mia", time: 0.5 },
  { text: "te llenaría todo el día de sonrisas", time: 3.5 },
  { text: "Hasta en mi sueños tu boca presumiría", time: 8 },
  { text: "Quien diría a dónde llegaría", time: 13 },
  { text: "y porque fueras mia", time: 20.5 },
  { text: "Mi alma al cielo yo seguro llevaría", time: 23 },
  { text: "Diez mil kilómetros descalzo correría", time: 28 },
  { text: "Todo daría porque fueras mía", time: 34 },
  { text: "y ay mi amor, por favor dime", time: 40 },
  { text: "cuál es la receta para hacerte el AMOR", time: 44 },
  { text: "que nunca olvides", time: 47 },
  { text: "que volver a vernos sea algo tentador", time: 50 },
  { text: "AMOR DE CINE", time: 53 },
  { text: "eres como el agua en un día de calor", time: 54 },
  { text: "Ay mi amor, ya no estes triste", time: 61 },
  { text: "yo te doy el tiempo que tu necesites", time: 65 },
  { text: "Sean horas,cientos, miles", time: 67 },
  { text: "A tu honor preparo mil desfiles", time: 70 },
  { text: "pero para ti no existe", time: 72 },
  { text: "contigo no hay canciones tristes :)", time: 75 },
  { text: "Gasolina pa' mi motor", time: 77 },
  { text: "Somos uno y somos dos", time: 80 },
];

var loveData = [
  { text: "Tu sonrisa", time: 1 },
  { text: "Tu cabello", time: 2 },
  { text: "Tu risa", time: 3 },
  { text: "Tus cachetes", time: 4 },
  { text: "Tus labios", time: 5 },
  { text: "Tu humor", time: 6 },
  { text: "Tus ojos", time: 7 },
  { text: "Tu forma de comportarte", time: 8 },
  { text: "Confianza", time: 9 },
  { text: "Hermosa", time: 10 },
  { text: "Maravillosa", time: 11 },
  { text: "Bonita", time: 12 },
  { text: "Divertida", time: 13 },
  { text: "Inteligente", time: 14 },
  { text: "Tu lealtad", time: 15 },
  { text: "Tu pasión", time: 16 },
  { text: "Tu fuerza", time: 17 },
  { text: "Tu honestidad", time: 18 },
  { text: "Tu energía", time: 19 },
  { text: "Tu voz", time: 20 },
  { text: "Tu apoyo", time: 21 },
  { text: "Tu creatividad", time: 22 },
  { text: "Única", time: 23 },
  { text: "Tu habilidad para hacerme reír cuando estoy triste", time: 24 },
  { text: "Tu gran corazón", time: 25 },
  { text: "Tu calidez", time: 26 },
  { text: "Tu estilo", time: 27 },
  { text: "Tu encanto", time: 28 },
  { text: "Tu energía positiva", time: 29 },
  { text: "Tu paciencia", time: 30 },
  { text: "Tu coraje", time: 31 },
  { text: "Trabajadora", time: 32 },
  { text: "Tu corazón que perdona", time: 33 },
  { text: "Tus calidos abrazos", time: 34 },
  { text: "Tu cariño", time: 35 },
  { text: "Tu gentileza", time: 36 },
  { text: "Mi motivación", time: 37 },
  { text: "Tu amor por mi", time: 38 },
  { text: "Tu presencia", time: 39 },
  { text: "Inteligencia", time: 40 },
  { text: "Tu consideración", time: 41 },
  { text: "Tu amor", time: 42 },
  { text: "Tu curiosidad", time: 43 },
  { text: "Tu aprecio", time: 44 },
  { text: "Tu alma", time: 45 },
  { text: "Tus bromas", time: 46 },
  { text: "Tu fe en mí", time: 47 },
  { text: "Tu fe en Dios", time: 48 },
  { text: "Tu humildad", time: 49 },
  { text: "Asombrosa", time: 50 },
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
