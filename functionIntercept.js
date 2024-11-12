function interceptoConExtRef() {
  if (QSI.API) {
      hasInterceptLoaded=true;
    } else {
      hasInterceptLoaded=false;
    }
  console.log("Se cargo el intercepto: " + hasInterceptLoaded)
  sessionStorage.setItem("valorSesion", "Hola que tal");
  var data = sessionStorage.getItem("valorSesion");
  console.log("Valor de la sesion: " + data)
}

function evaluarIntercepto() {
  if (hasInterceptLoaded) {

    var interceptId = 'SI_bIvSOwnxmQdJ2zc' // SI_d5pdlVu5JyIGGjQ

    console.log("Intercepto cargado. Evaluando script: " + interceptId)

    var idCliente = '1234';

    // QSI.API.run(interceptId, {})
    QSI.API.run(interceptId, {}, { "embebidoEnvio": idCliente });


    console.log("Script evaluado. data embebida enviada: " + idCliente)
  } else {
    console.log("No esta cargado el intercepto")
  }
}