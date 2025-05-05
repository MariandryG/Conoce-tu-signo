
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
  });