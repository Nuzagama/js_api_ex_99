document.getElementById('miFormulario').addEventListener('submit', function(e) {
    e.preventDefault(); // Evita el envío tradicional del formulario
  
    // FormData recoge los datos del formulario
    var datos = new FormData(document.getElementById('miFormulario'));
  
    fetch('guardarDatos.php', {
      method: 'POST', // Método de envío
      body: datos // Datos del formulario
    })
    .then(response => response.text()) // Convertir la respuesta a texto
    .then(data => {
      console.log(data); // Acciones después de la respuesta del servidor
    });
  });
  