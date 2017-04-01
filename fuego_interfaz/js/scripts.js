//Función para agregar contenido a elmentos
function addContent(element,content){
  $(element).innerHTML+=content;
}// Fin funcion addContent
//Función para elminar el contenido de algún elemento
function deleteContent(element){
  $(element).innerHTML='';
}//fin función deleteContent
// Obtener elementos
function $(element){
  return document.querySelector(element);
}//Fin función $ para seleccionar elementos del DOM
//Función que inicia Javascript
(function() {
  // Avisa si el DOM cargó por completo
  document.addEventListener('DOMContentLoaded', function () {
    //console.log($("#titulo-principal"));
    //deleteContent('#content');
    //addContent('#content','<h1>Título agregado con Javascript</h1>');
    menu_events();
    loadHTML('#content','inicio.html');
  });
})();//Fin función que se ejecuta automáticamente y contiene función que indica cuando cargó el DOM
//Función de prueba para probar funcionalidad del menú*/
function mensaje(msj){
  console.log(msj);
}//Fin función mensaje
//Función que agrega eventos a los botones del menú
function menu_events(){
  var menuBtns=['#inicioBtn','#ej1','#ej2','#expl'];
  //ciclo que recorre el arreglo del menú
  for(var i=0;i<menuBtns.length;i++){
      $(menuBtns[i]).addEventListener("click", function(){
        mensaje(this.innerHTML);
    });
  }
}//Fin función menu_events
//Funcion para cargar contenido de archivos
function loadHTML(element,dir){
  //Referencia: http://entredesarrolladores.com/4069/cargar-un-div-externo-con-ajax-sin-jquery
  var xmlhttp;
  if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp = new XMLHttpRequest();
  }
  else {
    // code for IE6, IE5
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
  }
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        //$(element).innerHTML = xmlhttp.responseText;
        deleteContent(element);
        addContent(element,xmlhttp.responseText);
    }
  }
  xmlhttp.open('GET',dir, true);
  xmlhttp.send();
}
