document.formulario.addEventListener('submit', validarFormulario);

function validarFormulario(evObject){
 evObject.preventDefault();//Evita que el formulario se envie
 var nombre = document.getElementById('nombre').value;
 var correo = document.getElementById('correo').value;
 var telefono = document.getElementById('telefono').value;
 if(nombre=="")alert("Nombre esta vacio")
 else if(correo=="")alert("El Correo esta vacio")

}