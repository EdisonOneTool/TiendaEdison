function preIntercept() {
    console.log("preIntercept antes de evaluar")
    if(typeof QSI === "undefined") {
        userId = "152"
        console.log("preIntercept evaluando")
        console.log(userId)
        QSI = {};
        QSI.config = {
          externalReference: userId
        };
        console.log("cargado extRef")
    }
}
