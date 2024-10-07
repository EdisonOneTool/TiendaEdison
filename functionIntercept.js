function interceptoConExtRef() {
    if (QSI.API) {
        hasInterceptLoaded=true;
      } else {
        hasInterceptLoaded=false;
      }
    console.log(hasInterceptLoaded)

    if (hasInterceptLoaded) {
        console.log("evaluando scripts")
        // QSI.API.run();
        QSI.API.run('SI_6YDe0e3j19MQXz0', {}, {
          "ApellidoNombre9": "Medvdev"  // Dato embebido que será enviado a Qualtrics
        });
        console.log("script evaluado")
    } 
}