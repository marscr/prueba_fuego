/************************************************************************************************************************************
*************************************************************************************************************************************
      Prueba de Fuego Ciris para Desarrollador Javascript
      Autor: Marlon Araya Seas.
      Email: marlon.araya.seas@gmail.com

      Herramientas Utilizadas:
          * Editor de Textos Atom

      ************************************************************************************
      ||Estos problemas fueron resueltos tomando en cuenta la entrada de datos validos, ||
      ||como si las validaciones se encontraran en otra capa                            ||
      ************************************************************************************
*************************************************************************************************************************************
*************************************************************************************************************************************/

problema1();//Invoca al problema1
problema2();//Invoca al problema2
//Problema1 y funciones auxiliares
/*
Escriba ​ tres ​ funciones que sumen todos los números de una lista dada. Se debe hacer una
función usando ​ FOR​ , otra usando ​ WHILE ​ y otra usando ​ RECURSIVIDAD
*/
function problema1(){
  var lista=[5,78,64,2156];
  console.log("Resultado de suma con FOR "+sumafor(lista));//Suma con ciclo for
  console.log("Resultado de suma con While "+sumawhile(lista));//Suma con ciclo while
  //console.log("Lista: "+lista);
  console.log("Resultado de suma recursiva "+sumarecursiva1(lista,0) +" No destruye la lista");//Sin destruir la lista
  //console.log("Lista: "+lista);
  /////***Advertencia*** Este proceso destruye la lista
  //console.log("Resultado de suma recursiva destruye "+sumarecursiva2(lista)+" Sí destruye la lista");//Destruyendo la lista
  //console.log("Lista: "+lista);
}///fin problema1

function sumafor(lista){
  var resultado=0;
    for(var i=0;i<lista.length;i++){
      resultado+=lista[i];
    }//fin del ciclo for que recorre la lista
    return resultado;
}//fin sumafor

function sumawhile(lista){
  var resultado=0,i=0;
    while(i<lista.length){
      resultado+=lista[i];
      i++;
    }
    return resultado;
}//fin sumawhile
//////////////Suma Recursiva que deja intacta la lista
function sumarecursiva1(lista,i){
  variable = lista[i];
  if(i===lista.length-1){
      //Condición de salida
      return variable;
  }
  else{
    //Llamada recursiva
    return variable+(sumarecursiva1(lista,i+1));
  }
}//fin sumarecursiva
//////////////Suma Recursiva que destruye la lista
function sumarecursiva2(lista){
  if(lista.length===0){
    //Lista Vacía
    return 0;
  }
  else if(lista.length===1){
    //Condición de Salida
    return lista[0];
  }
  else{
    //Llamada Recursiva
    lista[0]+=lista.pop();
    return sumarecursiva2(lista);
  }
}//fin sumarecursiva

////////////////////////////////////////////////////////////
////////////////////Problema2 y funciones Auxiliares
////////////////////////////////////////////////////////////
/*
Escriba una función que combine dos listas, alternando cada elemento. Por ejemplo, dadas
las listas ​ [a, b, c]​ y​ [1, 2, 3]​ , la función debería retornar: ​ [a, 1, b, 2, c, 3]
*/
function problema2(){
  var lista1=['a','b','c'],lista2=[1,5,86,8];
  console.log("Lista 1: ");
  console.log(lista1);
  console.log("Lista 2: ");
  console.log(lista2);
  var largo =largo_listas(lista1,lista2);
  console.log("Resultado: ");
  console.log(unir_listas(lista1,lista2,largo));
}
//Esta funcion une las listas
function unir_listas(lista1,lista2,largo){
  var resultado=[];
  for(var i=0;i<largo;i++){
    if(i<lista1.length){
      resultado.push(lista1[i]);
    }
    if(i<lista2.length){
      resultado.push(lista2[i]);
    }
  }//ficlo que recorre las listas
  return resultado;
}
//Esta función devuelve el largo de la lista más larga ya que esta va a marcar la cantidad de repeticiones
function largo_listas(lista1,lista2){
  if(lista1.length>=lista2.length){
    return lista1.length;
  }//si la primera tiene más elementos o son iguales
  else{
    return lista2.length;
  }// si la segunda tiene más elementos
  return 0;
}
