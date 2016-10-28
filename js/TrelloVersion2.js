
function trello(){
	var a = document.getElementById("inicio");
	var divPapa = document.getElementById("divPapa");
	divPapa.className = "div";

	var input= document.createElement("input");
	input.setAttribute("type","text");
	input.setAttribute("placeholder","Añadir una Lista");
	input.setAttribute("class","display");
	divPapa.appendChild(input);
	
	//crear el boton guardar
	var botonGuardar= document.createElement("input");
	botonGuardar.setAttribute("type","button");
	botonGuardar.setAttribute("value","GUARDAR");
	divPapa.appendChild(botonGuardar);
	//crear span
	var img = document.createElement("img");
	img.setAttribute("src","img/error.png");
	//añadir la imagen al div papa
	divPapa.appendChild(img);
	//evento click al button guardar
	botonGuardar.onclick = function(){
		ocultar();
		//vaciar el texto en una lista cada vez que le de click al boton guardar
		var insertDiv = document.createElement("div");
		insertDiv.setAttribute("class","display");
		var texto = document.createTextNode(input.value);
		//crear un parra que guarde el texto
		var parrafo = document.createElement("p");
		parrafo.appendChild(texto);
		//agregue el parrafo al insertdiv
		insertDiv.appendChild(parrafo);
		//inserte el insertdiv al papa div
		divPapa.appendChild(insertDiv);
		//ocultar el input img
		divPapa.removeChild(input);
		divPapa.removeChild(img);
		divPapa.removeChild(botonGuardar);
		//crear otro enlace para añadir una nueva tarea
		mostrar();
		document.getElementById("inicio").innerHTML = "Añadir una tarjeta";
		a.onclick = function(){
			crearTextarea();
		}
	}
	//click a la img cerrar
	img.onclick = function(){
		//divPapa.insertBefore(nuevo_nodo,nodo_de_referencia);
		divPapa.removeChild(input);
		divPapa.removeChild(img);
		divPapa.removeChild(botonGuardar);
	}
	//a.addEventListener("click",trello);
}
function ocultar(){
	document.getElementById('inicio').style.display = 'none';
};
function mostrar(){
	document.getElementById('inicio').style.display = 'block';
};

function crearTextarea(){
	var divTextarea = document.createElement("div");
	divTextarea.setAttribute("class","display");
	divPapa.appendChild(divTextarea);
	//crear el textarea
	var textarea = document.createElement("textarea");
	textarea.getAttribute("cols","30");
	textarea.getAttribute("rows","30");
	textarea.getAttribute("class","txt");
	textarea.getAttribute("class","display");
	divTextarea.appendChild(textarea);
	//crear button Añadir
	//crear el boton guardar
	var botonAgregarTarjeta= document.createElement("input");
	botonAgregarTarjeta.setAttribute("type","button");
	botonAgregarTarjeta.setAttribute("value","AÑADIR");
	divTextarea.appendChild(botonAgregarTarjeta);
	//evento click al boton añadir 
	botonAgregarTarjeta.onclick = function(){

	}

}