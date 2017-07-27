/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                              Funciones básicas tipo JQUERY
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/

//Función para agregar contenido a elmentos
function addContent(element,content){
  $(element).innerHTML+=content;
}// Fin funcion addContent
//Función para elminar el contenido de algún elemento
function deletelast(element){
  //$(element).lastElementChild.innerHTML='';
  var element= $(element);
  if(element.lastElementChild===null){
    console.log('Vacío');
  }
  else{
    element.removeChild(element.lastElementChild);
  }
}
function deleteContent(element){
  $(element).innerHTML='';
}//fin función deleteContent
// Obtener elementos
function $(element){
  return document.querySelector(element);
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

//////////////////////////////////////////////////////////////////ELIMINAR **************************************************************************
//Función de prueba para probar funcionalidad del menú*/
function mensaje(msj){
  console.log(msj);
}//Fin función mensaje
///////////////////////////////////////////////////////////////////ELIMINAR **************************************************************************
/*////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                    Función para agregar eventos
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
function addEvents(element,type, func){
  $(element).addEventListener(type,func);
}

/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                              Botones de Navegación
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
///////////////////////////////////////////////////////////Función que agrega eventos a los botones del menú/////////////////////////////////////////////////////////////////////////////
function menu_events(){
  var menuBtns=['#inicioBtn','#ej1','#ej2','#expl'];
  //ciclo que recorre el arreglo del menú
  var evento='';
  for(var i=0;i<menuBtns.length;i++){
    evento = function(){
      var auxiliar=0;
      switch(this.id){
        case 'inicioBtn':
          auxiliar='content/inicio.html';
        break;
        case 'ej1':
          auxiliar='content/ej1.html';
          //cargar_ejemplo1();
        break;
        default:
          mensaje(this.innerHTML);
        break;
      }//fin switch
      if(auxiliar!=0){
        loadHTML('main',auxiliar.toString(),2);
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
        //$(element).innerHTML = xmlhttp.responseText;
        deleteContent(element);//Limpia contenido
        addContent(element,xmlhttp.responseText);//Agrega contenido
        cargar_eventos(eventos);//Carga eventos del contenido
    }
  }
  xmlhttp.open('GET',dir, true);
  xmlhttp.send();
}

/*///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                              Cargar Eventos de cada pagina
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
/*/////////////////////////////////////////////////////////////////////////
                                Ejercicio 1
/////////////////////////////////////////////////////////////////////////*/
function   cargar_ejemplo1(){
  //console.log($('#agergar'));
  console.log("Elemento X: " + $('#lista'));
  console.log("Formulario: " + $('form'));
  var agregar_final=function(){
    //addContent('#lista_inputs','<li><input type="text"></li>');//Se quitó porque borra el elemento
    /////////////////////////////////Se debe optimizar a una función para que sirva de manera global
    var elemento =  document.createElement("li")//Crea el elemento lista
    elemento.innerHTML = '<input type="number">';///Le agrega el input
    $('#lista_inputs').appendChild(elemento);//Lo agrega a la lista
    ///////////////////

  };
  var eliminar_ultimo=function(){
    deletelast('#lista_inputs');
  };
  var resolver=function(){
    var lista=cargar_lista_array('#lista_inputs');//Carga la lista desde la interfaz
    deleteContent('#solucion-for');
    addContent('#solucion-for',"Resultado For: "+sumafor(lista));//Agrega la solución con For
    deleteContent('#solucion-while');
    addContent('#solucion-while',"Resultado While: "+sumawhile(lista));//Agrega la Solución con While
    deleteContent('#solucion-recur1');
    addContent('#solucion-recur1','Resultado Recursivo 1: '+sumarecursiva1(lista,0));//Agrega la Solución Recursiva que no destruye la lista
    deleteContent('#solucion-recur2');
    addContent('#solucion-recur2','Resultado Recursivo 2: '+sumarecursiva2(lista));//Agrega la Solución Recursiva que destruye la lista

  };
  addEvents('#agregar','click',agregar_final);
  addEvents('#eliminar','click',eliminar_ultimo);
  addEvents('#resolver','click',resolver);
}//carga los eventos del ejercicio 1
/*//////////////////////////////////////////////////
    Carga los eventos cuando se cargó el contenido ajax
//////////////////////////////////////////////*/
function cargar_eventos(eventos){
  switch (eventos) {
    case 2:
      cargar_ejemplo1();
    break;
    default:
    break;
  }
}

function cargar_lista_array(element){
  var element=$(element);
  var col=element.getElementsByTagName('input' );
  var arreglo=[];
  for(i=0;i<col.length;i++){
    arreglo.push(parseInt(col[i].value));
  }
  return arreglo;
}
