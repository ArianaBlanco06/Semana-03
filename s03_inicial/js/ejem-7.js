/* Caso 1: Recorrer cabecer */
let cabecera = document.head;
console.log(cabecera);

console.dir(document.head);
console.log(document.head.innerHTML);
console.log(document.head.outerHTML);


/* Caso 2 : reccorrer el body */

var cuerpo = document.body;
console.log(cuerpo);

/* Caso 3 : Agregar un elemento al DOM */
function agrega(){
    console.log("Entrando a agrega()");
    // Colorcar el puntero en la etiqueta padre
    lstNodos = document.getElementById("antiguo");
    // crear un nodo
    nodo = document.createElement("li");
    // Asignar el valor de lo ingresado en el Formulario
    nodo.textContent = document.getElementById("valor").value;
    nodo.className = "lp agregado jvm";
    // Asignar el nodo a la lista UL
    lstNodos.appendChild(nodo);

}

/* Casi 4 : crear nodos */
function crea(){
    nodo = document.createElement("ol");
    for ( let i = 0; i <5;i++) {
        nodo2 = document.createElement("li");
        nodo2.textContent = (i * 2);
        nodo.appendChild(nodo2);
    }
    document.getElementById("agregaAqui").append(nodo);
}

/* Caso 5: Listar Nodos del arbol DOM */
function listarNodos(){
    /* Obtener toda la rama desde <ol> hasta </ol> incluidos  <li>*/
    let lpModernos = document.getElementById("moderno");
    /* Solo quiero los nodos hijos <li> */
    let nodos = lpModernos.childNodes;
    console.log(nodos);
    // Crear un array
    let arr_modernos = [];

    /* Recorrer los nodos hijos */
    for (let i = 0; i<nodos.length;i++){
        if ( nodos[i].nodeType == document.ELEMENT_NODE){
            arr_modernos.push(nodos[i].textContent)
        }
    }
    
    document.getElementById("rpta1").innerHTML = arr_modernos;
}


/* Caso 6: Insertar Nodo */
function insertarNodo(){
    /* Obtener toda la rama desde <ol> hasta </ol> incluidos  <li>*/
    let lpModernos = document.getElementById("moderno");
    /* Solo quiero los nodos hijos <li> */
    let nodos = lpModernos.childNodes;
    console.log(nodos);
    // Crear un array
    let arr_modernos = [];

    /* Recorrer los nodos hijos */
    for (let i = 0; i<nodos.length;i++){
        if ( nodos[i].nodeType == document.ELEMENT_NODE){
            arr_modernos.push(nodos[i].textContent)
        }
    }

    arr_modernos.splice(1,0,"Unlambda","Malboge");
    document.getElementById("rpta2").innerHTML = arr_modernos;


    /** Modificar el DOM ***/
    // Paso 1: ubicar al PARENT y al nodo de referencia 
    let lista = document.getElementById("moderno");
    let referencia = document.getElementById("aqui");

    // Paso 2: crear nodo a insertar
    let nuevoNodo1 = document.createElement("li");
    nuevoNodo1.textContent = "Unlambda";
    nuevoNodo1.className = "agregado";
    nuevoNodo1.id = "agregado-1";

    let nuevoNodo2 = document.createElement("li");
    nuevoNodo2.textContent = "Malbolge";
    nuevoNodo2.className = "agregado";
    nuevoNodo2.id = "agregado-2";

    // Paso 3: agregar el primer nodo
    // Inserta antes del hermano que sigue a la referencia
    lista.insertBefore(nuevoNodo1,referencia.nextSibling);

    // Insertar el nodo 2 debajo del anterior
    lista.insertBefore(nuevoNodo2,nuevoNodo1.nextSibling);
}

/* Caso 7: borrar_insertar */ 
function borrar_insertar(){
    /* Obtener toda la rama desde <ol> hasta </ol> incluidos  <li>*/
    let lpModernos = document.getElementById("moderno");
    /* Solo quiero los nodos hijos <li> */
    let nodos = lpModernos.childNodes;
    console.log(nodos);
    // Crear un array
    let arr_modernos = [];

    /* Recorrer los nodos hijos */
    for (let i = 0; i<nodos.length;i++){
        if ( nodos[i].nodeType == document.ELEMENT_NODE){
            arr_modernos.push(nodos[i].textContent)
        }
    }

    arr_modernos.splice(3,1,"Intercal","oOk!");
    document.getElementById("rpta2").innerHTML = arr_modernos;

    
    /** Modificar el DOM ***/
    // Paso 1: ubicar al PARENT y al nodo de referencia 
    let lista = document.getElementById("moderno");
    let referencia = document.getElementById("eliminar");

    // Paso 2: crear nodo a insertar
    let nuevoNodo1 = document.createElement("li");
    nuevoNodo1.textContent = "Intercal";
    nuevoNodo1.className = "agregado";
    nuevoNodo1.id = "agregado-1";

    let nuevoNodo2 = document.createElement("li");
    nuevoNodo2.textContent = "oOk!";
    nuevoNodo2.className = "agregado";
    nuevoNodo2.id = "agregado-2";

    // Paso 3: agregar el primer nodo
    // Inserta antes del hermano que sigue a la referencia
    lista.insertBefore(nuevoNodo1,referencia.nextSibling);

    // Insertar el nodo 2 debajo del anterior
    lista.insertBefore(nuevoNodo2,nuevoNodo1.nextSibling);

    lista.removeChild(referencia);

}