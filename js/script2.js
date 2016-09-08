//Ejercicio clase 3
function pedirNombreCompleto() {
	var nombre = prompt("Ingresar tu nombre");  
	var apellido = prompt("Ingresar tu apellido");
	console.log(nombre, apellido);
}

pedirNombreCompleto();

function mostrar(esDiaHabil) {
   var diasHabiles = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];
   var finDeSemana = ["Sábado", "Domingo"];

	if (esDiaHabil) {

		mostrarArray(diasHabiles);

	 }
	 else {

		mostrarArray(finDeSemana);

	 }
 
}

function mostrarArray(miArray) {
	for(i = 0; i < miArray.length; i++) {
		alert(miArray[i]);			
	}

}


