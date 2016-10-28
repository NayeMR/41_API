
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
	//crear img
	var img = document.createElement("img");
	img.setAttribute("src","img/error.png");
	//añadir la imagen al div papa
	divPapa.appendChild(img);
	//crear divhermano de divpapa
	var divPapaTio= document.createElement("div");
	divPapaTio.setAttribute("class","div");
	divPapaTio.setAttribute("ondrop","drop(event)");
	divPapaTio.setAttribute("ondragover","allowDrop(event)");
	divPapa.appendChild(divPapaTio);

	ocultar();
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
	img.onclick = function imagen(){
		//divPapa.insertBefore(nuevo_nodo,nodo_de_referencia);
		divPapa.removeChild(input);
		divPapa.removeChild(img);
		divPapa.removeChild(botonGuardar);
		mostrar();
	}
	//a.addEventListener("click",trello);
}
function ocultar(){
	//esconde al elemenbto a de añadir lista
	document.getElementById('inicio').style.display = 'none';
};
function mostrar(){
	//muestra al elemenbto a de añadir lista
	document.getElementById('inicio').style.display = 'block';
};
function allowDrop(ev) {
    ev.preventDefault();
}
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
}
function crearTextarea(){
	var divTextarea = document.createElement("div");
	divTextarea.setAttribute("class","display");
	divPapa.appendChild(divTextarea);
	//crear el textarea
	var textarea = document.createElement("textarea");
	textarea.getAttribute("cols","20");
	textarea.getAttribute("rows","30");
	textarea.getAttribute("class","txt");
	textarea.getAttribute("class","display");
	divTextarea.appendChild(textarea);
	//crear el boton guardar
	var botonAgregarTarjeta= document.createElement("input");
	botonAgregarTarjeta.setAttribute("type","button");
	botonAgregarTarjeta.setAttribute("value","AÑADIR");
	divTextarea.appendChild(botonAgregarTarjeta);
	//crear img
	var img = document.createElement("img");
	img.setAttribute("src","img/error.png");
	//añadir la imagen al div papa
	divTextarea.appendChild(img);
	//click a la img cerrar
	img.onclick = function(){
		//divPapa.insertBefore(nuevo_nodo,nodo_de_referencia);
		divTextarea.removeChild(textarea);
		divTextarea.removeChild(img);
		divTextarea.removeChild(botonAgregarTarjeta);
		mostrar();
	}
	//evento click al boton añadir 
	botonAgregarTarjeta.onclick = function(){
		var texto = document.createTextNode(textarea.value);
		textarea.appendChild(texto);
		divTextarea.appendChild(textarea);
		divTextarea.removeChild(botonAgregarTarjeta);
	}

}