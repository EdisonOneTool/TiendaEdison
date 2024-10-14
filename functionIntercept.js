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
    var interceptId = 'SI_9vlIooAOHnLQGnc'
    console.log("Intercepto cargado. Evaluando script: " + interceptId)
    var embebidoVariable = 'medvedev';
    QSI.API.run(interceptId, {})
    console.log("Script evaluado. data embebida enviada: " + embebidoVariable)
  } else {
    console.log("No esta cargado el intercepto")
  }
}