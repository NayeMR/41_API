
function trello(){
	//var a = document.getElementById("inicio");

	var input= document.createElement("input");
	input.setAttribute("type","text");
	input.setAttribute("placeholder","Añadir una Lista");
	input.setAttribute("class","display");
	divPapa.appendChild(input);
	
	//crear el boton guardar
	var botonGuardar= document.createElement("input");
	botonGuardar.setAttribute("type","button");
	botonGuardar.setAttribute("placeholder","GUARDAR");
	divPapa.appendChild(botonGuardar);
	//crear span
	var img = document.createElement("img");
	img.setAttribute("src","img/error.png");
	divPapa.appendChild(img);


	//a.addEventListener("click",trello);
}

/*function crearTextarea(){
	var textarea = document.createElement("textarea");
	textarea.getAttribute("cols","30");
	textarea.getAttribute("rows","30");
	textarea.getAttribute("class","txt");
	divPapa.appendChild(textarea);
}*/