function mostrarSeccion(seccion) {
    // Redirige a la sección seleccionada y luego recarga la página
    window.location.href = '#' + seccion;
    location.reload();
    }

// Selección del modal y elementos relevantes
var modal = document.getElementById("modal");
var span = document.getElementsByClassName("close")[0];

// Evento para abrir el modal al hacer clic en un producto
document.querySelectorAll('.producto').forEach(item => {
    item.addEventListener('click', function() {
        var title = this.querySelector('.descripcion p').textContent;
        var description = "Aquí puedes agregar una descripción detallada del producto " + title + ".";
        var imageSrc = this.querySelector('img').src;
        
        // Set modal content
        document.getElementById('modal-title').textContent = title;
        document.getElementById('modal-description').textContent = description;
        document.getElementById('modal-image').src = imageSrc;
        
        modal.style.display = "block";
    });
});

// Cerrar el modal al hacer clic en la "x"
span.onclick = function() {
    modal.style.display = "none";
}

// Cerrar el modal al hacer clic fuera de él
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

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