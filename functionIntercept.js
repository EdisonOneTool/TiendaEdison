function interceptoConExtRef() {
  if (QSI.API) {
      hasInterceptLoaded=true;
    } else {
      hasInterceptLoaded=false;
    }
  console.log("Se cargo el intercepto: " + hasInterceptLoaded)
}

function evaluarIntercepto() {
  if (hasInterceptLoaded) {
    console.log("Intercepto cargado. Evaluando scripts")
    var embebidoVariable = 'medvedev';
    QSI.API.run('SI_9vlIooAOHnLQGnc', {}, {
      "ApellidoNombre9": embebidoVariable  // Dato embebido que será enviado a Qualtrics
    });
    console.log("Script evaluado. data embebida enviada: " + embebidoVariable)
  } else {
    console.log("No esta cargado el intercepto")
  }
}