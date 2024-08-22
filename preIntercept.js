function preIntercept() {
    if(typeof QSI === "unlimited") {
        QSI = {};
        QSI.config = {
          externalReference: 152
        };
        console.log("cargado extRef")
    }
}
