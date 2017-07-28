/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                              Funciones básicas tipo JQUERY
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
//Función para agregar contenido a elmentos
function addContent(element,content){
  $(element).innerHTML+=content;//Agrega elementos
}// Fin funcion addContent
//Función para elminar el contenido de algún elemento
function deletelast(element){
  var element= $(element);
  if(element.lastElementChild!==null){
    element.removeChild(element.lastElementChild);//Elimina el último de la lista
  }
}
function deleteContent(element){
  $(element).innerHTML='';//Limpia el contenido
}//fin función deleteContent
// Obtener elementos
function $(element){
  return document.querySelector(element);//Selecciona elementos tipo Jquery
}//Fin función $ para seleccionar elementos del DOM
/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                              Función que inicia
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
(function() {
  // Avisa si el DOM cargó por completo
  document.addEventListener('DOMContentLoaded', function () {
    menu_events();//Carga los eventos al menú
    loadHTML('main','content/inicio.html');//Carga por Default la pagina de inicio
  });   ///////////////Se ejecuta al cargar por completo el DOM
})();//Fin función que se ejecuta automáticamente y contiene función que indica cuando cargó el DOM
/*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                    Función para agregar eventos
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
function addEvents(element,type, func){
  $(element).addEventListener(type,func,true);//Agrega el evento a botones u elementos
}
/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                              Botones de Navegación
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
///////////////////////////////////////////////////////////Función que agrega eventos a los botones del menú/////////////////////////////////////////////////////////////////////////////
function menu_events(){
  //Arreglo  con los botones del menú
  var menuBtns=['#inicioBtn','#ej1','#ej2','#expl'];
  //ciclo que recorre el arreglo del menú
  var evento='',opcion=0;
  //Ciclo que recorre el arreglo con los botones y carga las funciones de cada uno
  for(var i=0;i<menuBtns.length;i++){
    evento = function(){
      var auxiliar=0;
      switch(this.id){
        case 'inicioBtn':
          auxiliar='content/inicio.html';
        break;
        case 'ej1':
          auxiliar='content/ej1.html';
          opcion=2;
        break;
        case 'ej2':
          auxiliar='content/ej2.html';
          opcion=3;
        break;
        default:
          alert("Opción No Válida");
        break;
      }//fin switch
      if(auxiliar!=0){
        loadHTML('main',auxiliar.toString(),opcion);
      }
    };//Agrega la función
    addEvents(menuBtns[i],'click',evento);
  }
}//Fin función menu_events
/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                          Cargar html externo
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
///////////////////////////////////////Funcion para cargar contenido de archivos//////////////////////////////////////////////////////////////////////////////////
function loadHTML(element,dir,eventos){
  //Referencia: http://entredesarrolladores.com/4069/cargar-un-div-externo-con-ajax-sin-jquery
  var xmlhttp;
   if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp = new XMLHttpRequest();
  }
  else {
    // code for IE6, IE5
    xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');
  }
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        deleteContent(element);//Limpia contenido
        addContent(element,xmlhttp.responseText);//Agrega contenido
        cargar_eventos(eventos);//Carga eventos del contenido
    }
  }
  xmlhttp.open('GET',dir, true);
  xmlhttp.send();
}
//Función que agrega elementos a las listas de los ejemplos 1 y 2
function agregarLista(listaDOM){
  var elemento =  document.createElement("li")//Crea el elemento lista
  elemento.innerHTML = '<input type="text">';///Le agrega el input
  $(listaDOM).appendChild(elemento);//Lo agrega a la lista
}
//Función que agrega elimina a las listas de los ejemplos 1 y 2
function eliminarLista(listaDOM){
  deletelast(listaDOM);
}
/*/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                              Cargar Eventos de cada pagina
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////Carga de eventos para el ejemplo1/////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function   cargar_ejemplo1(){
  //Variables con funciones para agregar eventos
  var agregar_final=function(){
        agregarLista('#lista_inputs');
    };//Fin Agregar al final
  var eliminar_ultimo=function(){
      eliminarLista('#lista_inputs');
  };//Fin eliminar_ultimo
  var resolver=function(){
    resolver1();
  };
  //Agrega los eventos a los botones de la lista
  addEvents('#agregar','click',agregar_final);
  addEvents('#eliminar','click',eliminar_ultimo);
  addEvents('#resolver','click',resolver);
}//carga los eventos del ejercicio 1
function resolver1(){
  //Carga la lista a partir de la lista en el DOM
  var lista=cargar_lista_array('#lista_inputs');//Carga la lista desde la interfaz
  //Limpia las respuestas anteriores
  deleteContent('#solucion-for');
  deleteContent('#solucion-while');
  deleteContent('#solucion-recur');
  //Resuelve y agrega las respuestas
  addContent('#solucion-for',"Resultado For: "+sumafor(lista));//Agrega la solución con For
  addContent('#solucion-while',"Resultado While: "+sumawhile(lista));//Agrega la Solución con While
  addContent('#solucion-recur','Resultado Recursivo : '+sumarecursiva(lista,lista.length));//Agrega la Solución Recursiva que destruye la lista
}
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////Carga de eventos para el ejemplo2/////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function   cargar_ejemplo2(){
  //Variables para ejecutar funciones desde el EventsListener
  var agregarLista1=function(){
        agregarLista('#lista1');
    };//Fin Agregar al final
  var eliminarLista1=function(){
      eliminarLista('#lista1');
  };//Fin eliminar_ultimo
  var agregarLista2=function(){
        agregarLista('#lista2');
    };//Fin Agregar al final
  var eliminarLista2=function(){
      eliminarLista('#lista2');
  };//Fin eliminar_ultimo
  var resolver=function(){
    resolver2();
  };
  ////////////////////Agrega los eventos a los botones
  //Lista1
  addEvents('#agregar1','click',agregarLista1);
  addEvents('#eliminar1','click',eliminarLista1);
  //Lista2
  addEvents('#agregar2','click',agregarLista2);
  addEvents('#eliminar2','click',eliminarLista2);
  //Resolver
  addEvents('#resolver_ej2','click',resolver);
}
function resolver2(){
  //Carga la lista desde la interfaz
  var lista1=cargar_lista_array('#lista1');
  var lista2=cargar_lista_array('#lista2');
  console.log(problema2Interfaz(lista1,lista2));//Eliminar
}
/*//////////////////////////////////////////////////
    Carga los eventos cuando se cargó el contenido ajax
//////////////////////////////////////////////*/
function cargar_eventos(eventos){
  //Carga los eventos cada vez que carga una pantalla
  switch (eventos) {
    case 2:
      cargar_ejemplo1();
    break;
    case 3:
      cargar_ejemplo2();
    break;
    default:
    break;
  }
}
//Función para leer la "lista" de la interfaz y devolver un arrays
function cargar_lista_array(element){
  var element=$(element);//Selecciona el elemento que tiene la lista
  var col=element.getElementsByTagName('input' );//Selecciona los inputs de la lista
  var arreglo=[];//Varibale auxiliar
  for(i=0;i<col.length;i++){
    arreglo.push(col[i].value);//Ciclo que lee los elementos y los agrega al resultado
  }
  return arreglo;
}
