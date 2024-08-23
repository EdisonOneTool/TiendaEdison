function preIntercept() {
    if(typeof QSI === "unlimited") {
        userId = "152"
        console.log(userId)
        QSI = {};
        QSI.config = {
          externalReference: userId
        };
        console.log("cargado extRef")
    }
}
