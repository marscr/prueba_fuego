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

//////////////////////////////////////////problema1();//Invoca al problema1
//////////////////////////////////////////problema2();//Invoca al problema2

//Problema1 y funciones auxiliares
/*
Escriba ​ tres ​ funciones que sumen todos los números de una lista dada. Se debe hacer una
función usando ​ FOR​ , otra usando ​ WHILE ​ y otra usando ​ RECURSIVIDAD
*/
function problema1(){
  var lista=[5,78,64,2156];
  //Esto es para probar sin interfaz
  console.log("Resultado de suma con FOR "+sumafor(lista));//Suma con ciclo for
  console.log("Resultado de suma con While "+sumawhile(lista));//Suma con ciclo while
  console.log("Resultado de suma recursiva "+sumarecursiva(lista,lista.length));//Sin destruir la lista
  console.log(lista);
}///fin problema1

function sumafor(lista){
  var resultado=0;
    for(var i=0;i<lista.length;i++){
      resultado+=parseInt(lista[i]);
    }//fin del ciclo for que recorre la lista
    return resultado;
}//fin sumafor

function sumawhile(lista){
  var resultado=0,i=0;
    while(i<lista.length){
      resultado+=parseInt(lista[i]);
      i++;
    }
    return resultado;
}//fin sumawhile
//////////////Suma Recursiva
function sumarecursiva(lista,largo){
  var resultado=0;
  if(largo==0){
    return 0;
  }
  largo-=1;
  if(lista.length<1){
    return parseInt(lista[0]);
  }
  else{
        resultado = parseInt(lista[largo]) + sumarecursiva(lista,largo);
    }
    return resultado;
}//fin sumarecursiva

////////////////////////////////////////////////////////////
////////////////////Problema2 y funciones Auxiliares
////////////////////////////////////////////////////////////
/*
Escriba una función que combine dos listas, alternando cada elemento. Por ejemplo, dadas
las listas ​ [a, b, c]​ y​ [1, 2, 3]​ , la función debería retornar: ​ [a, 1, b, 2, c, 3]
*/
function problema2(lista1,lista2){
  //Esto es para probar sin interfaz
  console.log("Lista 1: ");
  console.log(lista1);
  console.log("Lista 2: ");
  console.log(lista2);
  var largo =largo_listas(lista1,lista2);
  console.log("Resultado: ");
  console.log(unir_listas(lista1,lista2,largo));
}
function problema2Interfaz(lista1,lista2){
  var largo =largo_listas(lista1,lista2);
  return unir_listas(lista1,lista2,largo);
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
