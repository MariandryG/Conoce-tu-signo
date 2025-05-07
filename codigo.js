function obtenerSignoZodiacal(dia, mes) {
  let signo = "";
  let descripcion = "";

  if ((mes === 3 && dia >= 21) || (mes === 4 && dia <= 19)) {
    signo = "Aries";
    descripcion = "Valiente, enérgico, entusiasta.";
  } else if ((mes === 4 && dia >= 20) || (mes === 5 && dia <= 20)) {
    signo = "Tauro";
    descripcion = "Paciente, confiable, persistente.";
  } else if ((mes === 5 && dia >= 21) || (mes === 6 && dia <= 20)) {
    signo = "Géminis";
    descripcion = "Curioso, adaptable, comunicativo.";
  } else if ((mes === 6 && dia >= 21) || (mes === 7 && dia <= 22)) {
    signo = "Cáncer";
    descripcion = "Emocional, protector, intuitivo.";
  } else if ((mes === 7 && dia >= 23) || (mes === 8 && dia <= 22)) {
    signo = "Leo";
    descripcion = "Seguro, generoso, creativo.";
  } else if ((mes === 8 && dia >= 23) || (mes === 9 && dia <= 22)) {
    signo = "Virgo";
    descripcion = "Analítico, meticuloso, práctico.";
  } else if ((mes === 9 && dia >= 23) || (mes === 10 && dia <= 22)) {
    signo = "Libra";
    descripcion = "Diplomático, equilibrado, sociable.";
  } else if ((mes === 10 && dia >= 23) || (mes === 11 && dia <= 21)) {
    signo = "Escorpio";
    descripcion = "Apasionado, decidido, misterioso.";
  } else if ((mes === 11 && dia >= 22) || (mes === 12 && dia <= 21)) {
    signo = "Sagitario";
    descripcion = "Optimista, aventurero, honesto.";
  } else if ((mes === 12 && dia >= 22) || (mes === 1 && dia <= 20)) {
    signo = "Capricornio";
    descripcion = "Práctico, disciplinado, ambicioso.";
  } else if ((mes === 1 && dia >= 21) || (mes === 2 && dia <= 19)) {
    signo = "Acuario";
    descripcion = "Original, independiente, humanitario.";
  } else if ((mes === 2 && dia >= 20) || (mes === 3 && dia <= 20)) {
    signo = "Piscis";
    descripcion = "Compasivo, artístico, intuitivo.";
  }

  return { nombre: signo, descripcion: descripcion };
}


function getZodiacImageFile(nombreSigno) {
  const imagenes = {
    "Aries": "aries.png",
    "Tauro": "tauro.png",
    "Géminis": "geminis.png",
    "Cáncer": "cancer.png",
    "Leo": "leo.png",
    "Virgo": "virgo.png",
    "Libra": "libra.png",
    "Escorpio": "escorpio.png",
    "Sagitario": "sagitario.png",
    "Capricornio": "capricornio.png",
    "Acuario": "acuario.png",
    "Piscis": "piscis.png"
  };

  return imagenes[nombreSigno] || "aries.png"; // Imagen por defecto
}

// Evento que se ejecuta cuando el usuario envía el formulario
document.querySelector('.datos').addEventListener('submit', function (e) {
  e.preventDefault(); // Previene que la página se recargue

  const fechaInput = document.getElementById('fechaNacimiento').value;
  const [anio, mes, dia] = fechaInput.split('-').map(Number); // Extrae los valores exactos

  const signo = obtenerSignoZodiacal(dia, mes);
  const imagenUrl = `./img/${getZodiacImageFile(signo.nombre)}`;

  const infoHTML = `
    <h2>${signo.nombre}</h2>
    <p>${signo.descripcion}</p>
    <img src="${imagenUrl}" alt="${signo.nombre}" class="signo-img" />`;

  document.getElementById('signoInfo').innerHTML = infoHTML;
});
/*
function obtenerSignoZodiacal(dia, mes) {
    const signos = [
      { nombre: "Capricornio", fechaInicio: [12, 22], fechaFin: [1, 19], descripcion: "Práctico, disciplinado, ambicioso." },
      { nombre: "Acuario", fechaInicio: [1, 20], fechaFin: [2, 18], descripcion: "Original, independiente, humanitario." },
      { nombre: "Piscis", fechaInicio: [2, 19], fechaFin: [3, 20], descripcion: "Compasivo, artístico, intuitivo." },
      { nombre: "Aries", fechaInicio: [3, 21], fechaFin: [4, 19], descripcion: "Valiente, enérgico, entusiasta." },
      { nombre: "Tauro", fechaInicio: [4, 20], fechaFin: [5, 20], descripcion: "Paciente, confiable, persistente." },
      { nombre: "Géminis", fechaInicio: [5, 21], fechaFin: [6, 20], descripcion: "Curioso, adaptable, comunicativo." },
      { nombre: "Cáncer", fechaInicio: [6, 21], fechaFin: [7, 22], descripcion: "Emocional, protector, intuitivo." },
      { nombre: "Leo", fechaInicio: [7, 23], fechaFin: [8, 22], descripcion: "Seguro, generoso, creativo." },
      { nombre: "Virgo", fechaInicio: [8, 23], fechaFin: [9, 22], descripcion: "Analítico, meticuloso, práctico." },
      { nombre: "Libra", fechaInicio: [9, 23], fechaFin: [10, 22], descripcion: "Diplomático, equilibrado, sociable." },
      { nombre: "Escorpio", fechaInicio: [10, 23], fechaFin: [11, 21], descripcion: "Apasionado, decidido, misterioso." },
      { nombre: "Sagitario", fechaInicio: [11, 22], fechaFin: [12, 21], descripcion: "Optimista, aventurero, honesto." }
    ];
  
    for (const signo of signos) {
      const [mesInicio, diaInicio] = signo.fechaInicio;
      const [mesFin, diaFin] = signo.fechaFin;
  
      if (
        (mes === mesInicio && dia >= diaInicio) ||
        (mes === mesFin && dia <= diaFin)
      ) {
        return signo;
      }
    }
  
    return signos[0]; // Capricornio por defecto
  }
  
  function getZodiacImageFile(nombreSigno) {
    const imagenes = {
      "Aries": "aries.png",
      "Tauro": "tauro.png",
      "Géminis": "geminis.png",
      "Cáncer": "cancer.png",
      "Leo": "leo.png",
      "Virgo": "virgo.png",
      "Libra": "libra.png",
      "Escorpio": "escorpio.png",
      "Sagitario": "sagitario.png",
      "Capricornio": "capricornio.png",
      "Acuario": "acuario.png",
      "Piscis": "piscis.png"
    };
  
    return imagenes[nombreSigno] || "aries.png";
  }
  
  document.querySelector('.datos').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const fecha = new Date(document.getElementById('fechaNacimiento').value);
    const dia = fecha.getDate();
    const mes = fecha.getMonth() + 1;
  
    const signo = obtenerSignoZodiacal(dia, mes);
    const imagenUrl = `./img/${getZodiacImageFile(signo.nombre)}`;
  
    const infoHTML = `
      <h2>${signo.nombre}</h2>
      <p>${signo.descripcion}</p>
      <img src="${imagenUrl}" alt="${signo.nombre}" class="signo-img" />`;
  
    document.getElementById('signoInfo').innerHTML = infoHTML;
  });*/