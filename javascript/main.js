document.formulario.addEventListener('submit', validarFormulario);

function validarFormulario(evObject){
 evObject.preventDefault();//Evita que el formulario se envie
 
 var exprMail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
 var expTel = /[0-9]{2}[0-9]{3}[0-9]{2}[0-9]{2}/;
 var nombre = document.getElementById('nombre').value;
 var correo = document.getElementById('correo').value;
 var telefono = document.getElementById('telefono').value;

 if(nombre=="")alert("Nombre esta vacio");
 else if(correo=="")alert("El Correo esta vacio");
 else if( !exprMail.test(correo))alert("Error: La dirección de correo " + correo + " es incorrecta.");
 else if(telefono=="")alert("El telefono esta vacio");
 else if(!expTel.test(telefono))alert("El telefono no valido");
 else if(!validarCumpleaños()) return;
 else {
 	document.formulario.method="Post";
 	document.formulario.action="index.html";
 	document.formulario.submit();	
 }
}


function validarCumpleaños(){
	var dia = parseInt(document.getElementById("dia").value);
	//!!Importante js toma los meses del 0 al 11
	var mes = parseInt(document.getElementById("mes").value)-1;
	var anio = parseInt(document.getElementById("anio").value);

	var nacimiento = new Date(anio, mes, dia);
	
	if(!((dia==nacimiento.getDate()) 
			&& (mes==nacimiento.getMonth()) 
			&& (anio==nacimiento.getFullYear()))){
		alert("Fecha de Nacimiento no valida");
		return false;
	}else if(obtenerEdad(nacimiento)<18){
		alert("No puedes ser menos de Edad, tienes " + obtenerEdad(nacimiento) +" años ");
		return false;
	}

	return true;
}

function obtenerEdad(nacimiento){
	var edad=0;
	var hoy = new Date();

	//edad=(hoy-nacimiento)/86400/1000/365.2

	edad=hoy.getFullYear()-nacimiento.getFullYear();
	if(nacimiento.getMonth()>hoy.getMonth()){
		edad=edad-1;
	}
	else if(nacimiento.getMonth()==hoy.getMonth() && nacimiento.getDate()>hoy.getDate()){
		edad=edad-1;
	}


	return edad;
}
