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
    var interceptId = 'SI_bIvSOwnxmQdJ2zc' // SI_d5pdlVu5JyIGGjQ
    console.log("Intercepto cargado. Evaluando script: " + interceptId)
    var embebidoVariable = 'HolaMundo';
    QSI.API.run(interceptId, {})
    // QSI.API.run(interceptId, {}, { "ApellidoNombre9": embebidoVariable });
    // console.log("Script evaluado. data embebida enviada: " + embebidoVariable)
  } else {
    console.log("No esta cargado el intercepto")
  }
}