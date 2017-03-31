function addContent(element,content){
  $(element).innerHTML+=content;

}
function deleteContent(element){
  $(element).innerHTML="";
}

// Obtener elementos
function $(element){
  return document.querySelector(element);
}

// Avisa si el DOM cargó por completo
document.addEventListener('DOMContentLoaded', function () {
    //console.log($("#titulo-principal"));
    deleteContent("#content");
    addContent("#content","<h1>Título agregado con Javascript</h1>");
});
