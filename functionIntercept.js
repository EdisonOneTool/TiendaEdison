function interceptoConExtRef() {
    if (QSI.API) {
        hasInterceptLoaded=true;
      } else {
        hasInterceptLoaded=false;
      }
    console.log(hasInterceptLoaded)

    if(typeof QSI === "unlimited") {
        QSI = {};
        QSI.config = {
          externalReference: 152
        };
        console.log("cargado extRef")
    }

    if (hasInterceptLoaded) {
        console.log("evaluando scripts")
        QSI.API.run();
        console.log("script evaluado")
    } 
}