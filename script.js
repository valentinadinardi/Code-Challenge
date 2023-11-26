let enviar = document.getElementById("enviar");

enviar.addEventListener("click", function enviarFormulario() {
    // Obtengo los valores del formulario
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var fechaNacimiento = document.getElementById("fechaNacimiento").value;
  
    // Creo un objeto con los datos del formulario
    var usuario = {
      nombre: nombre,
      apellido: apellido,
      fechaNacimiento: fechaNacimiento
    };
  
    

    // Realizo ls solicitud de tipo POST
    fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(usuario)
    })
    .then(response => response.json())
    .then(data => {
      console.log('Respuesta del servidor (nuevo usuario):', data); //Muestro el nuevo usuario en consola
      alert('El registro se ha realizado con éxito. Revisa la consola.');

    
      return fetch('https://jsonplaceholder.typicode.com/users'); //Obtengo todos los usuarios
    })
    .catch(error => {
      console.error('Error al enviar la solicitud:', error);
      alert('Error al enviar la solicitud. Consulta la consola para más detalles.');
    });

    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("fechaNacimiento").value = "";

});
  