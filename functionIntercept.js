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
    }
}