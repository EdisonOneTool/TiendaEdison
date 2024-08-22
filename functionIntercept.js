function interceptoConExtRef() {
    if (QSI.API) {
        hasInterceptLoaded=true;
      } else {
        hasInterceptLoaded=false;
      }
    console.log(hasInterceptLoaded)

    if (hasInterceptLoaded) {
        console.log("evaluando scripts")
        QSI.API.run();
        console.log("script evaluado")
    } 
}