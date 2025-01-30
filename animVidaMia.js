// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");
var lyrics2 = document.querySelector("#lyrics2");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Vida mia", time: 8 },
  { text: "Mi corazón lo llevas tú", time: 10 },
  { text: "Por mi y en tu palma lo haces latir", time: 16 },
  { text: "Con nadie había latido así", time: 21 },
  { text: "Vida mía", time: 27 },
  { text: "Mi corazón me habla tanto de ti", time: 28 },
  { text: "Me dice que eres lo mejor", time: 34 },
  { text: "Que nos ha pasado a los dos", time: 39 },
  { text: "Si te digo vida mía", time: 51 },
  { text: "Lo digo de manera literal", time: 54 },
  { text: "Por ti no son solo cosquillas", time: 59 },
  { text: "Por ti me gusta respirar", time: 64 },
  { text: "Si te digo vida mía", time: 68 },
  { text: "No lo digo por exagerar", time: 72 },
  { text: "Si la vida se trata de amar", time: 76 },
  { text: "Sin ti no sería vida", time: 80 },
];

var loveData = [
  { text: "Juguetona", time: 1 },
  { text: "Eres extrovertida", time: 2 },
  { text: "Tu belleza natural", time: 3 },
  { text: "Tu risa", time: 4 },
  { text: "Tu amor por tus amigos", time: 5 },
  { text: "Tu humildad", time: 6 },
  { text: "Tu lado juguetón", time: 7 },
  { text: "Recuerdas nuestros buenos momentos", time: 8 },
  { text: "Tu tacto", time: 9 },
  { text: "Tu gusto por la música que nos une", time: 10 },
  { text: "Tu confiabilidad", time: 11 },
  { text: "Tu comprensión", time: 12 },
  { text: "Tu dedicación a tus metas", time: 13 },
  { text: "Tu pasión por lo que amas", time: 14 },
  { text: "Tu calidez", time: 15 },
  { text: "Tus cumplidos", time: 16 },
  { text: "Tus pequeños chistes", time: 17 },
  { text: "Tu respeto", time: 18 },
  { text: "Tu encanto", time: 19 },
  { text: "Tu gracia", time: 20 },
  { text: "Tu confianza", time: 21 },
  { text: "Tu atención", time: 22 },
  { text: "Tus creencias", time: 23 },
  { text: "No me juzgas", time: 24 },
  { text: "Nuestra conexión", time: 25 },
  { text: "Nuestro vínculo", time: 26 },
  { text: "Tu timidez", time: 27 },
  { text: "Tu curiosidad", time: 28 },
  { text: "Tu respeto por ti misma", time: 29 },
  { text: "Tu cuidado personal", time: 30 },
  { text: "Tu crecimiento", time: 31 },
  { text: "Tu apego", time: 32 },
  { text: "Tu esfuerzo", time: 33 },
  { text: "Me haces sentir cálido", time: 34 },
  { text: "Tus besos", time: 35 },
  { text: "Tu piel", time: 36 },
  { text: "Tu voluntad", time: 37 },
  { text: "Tus chistes", time: 38 },
  { text: "Tu familia", time: 39 },
  { text: "Tus defectos", time: 40 },
  { text: "Tu madurez", time: 41 },
  { text: "Tu responsabilidad", time: 42 },
  { text: "Tus dientes", time: 43 },
  { text: "Tus consejos", time: 44 },
  { text: "Tus modales", time: 45 },
  { text: "Tu seriedad", time: 46 },
  { text: "Tu amor", time: 47 },
  { text: "Eres Linda", time: 48 },
  { text: "Me hiciste ser una mejor persona", time: 49 },
  { text: "Encantadora", time: 50 },
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
