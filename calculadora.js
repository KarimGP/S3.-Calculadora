/* Para ejecutar y ver los cambios sobre el documento html cada vez que necesitemos operar
vamos a utilizar la orden getElementById para que cada vez que nos posicionemos y cliquemos
sobre el elemento operable, éste sea reconocido por la función y ejecute la acción programada.
En este caso se opta por la opción de adicionar la operación marcada con += sobre el valor indicado
previamente con el getElem... al siguiente valor también indicado con getElem...*/

function valor (x) {
    document.getElementById('display').value += x;
}

/* Ejecutamos de la misma manera que en la función valor, pero para evitar añadir "nada" a lo que ya tenemos 
en el display y conseguir que lo que hay en el display se sustituya realmente por "nada", insertamos un valor 
diferente a x (y) que valga "nada" y así dejamos el display en blanco */ 

function borrardisplay (y) {
    document.getElementById('display').value = y;
}

/* Para conseguir el resultado utilizamos la función eval, la cual ejecuta la instrucción que se le pasa 
visualizada en el display y escribirá el resultado allá donde le digamos, en este caso el mismo display */

function cal_resultado () {
    let result = eval(document.getElementById('display').value);
    document.getElementById('display').value = result;
}