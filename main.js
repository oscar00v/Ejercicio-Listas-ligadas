// 1.- Implemente un procedimiento que inserte un dato de modo similar al insertar, al final de la lista. Pero ahora, no se debe permitir insertar datos repetidos, si un dato ya está almacenado entonces la lista no cambia.
// 2.- Escribir un programa para formar una lista que realice las siguientes tareas:
// Crear una Lista Enlazadas de Números Enteros Positivos al azar, la inserción se realiza por el último nodo.
// Crear una Lista Enlazadas de Números Enteros Positivos al azar, la inserción se realiza por el último nodo.
// Mostrar todos los Nodos que superen un valor determinado.


class Node{
    constructor(value = 0, next = null){
        this.value = value;
        this.next = null; 
    }
}

class LinkedList{
    constructor(value){
        const nodo = new Node(value);
        this.head = null;
        this.lenght = 1;
    }

    printList(){
        let temp = this.head;
        while(temp != null){
            console.log(temp.value);
            temp = temp.next;
        }

     }
    get(index){
        console.log("get")
        // Verificar si el índice es válido
        if (index < 0 || index >= this.length) {
            return null; // Retorna null si el índice está fuera de los límites
        }
         // Empezar desde la cabeza
         let currentNode = this.head;
         let counter = 0;
 
         // Recorrer la lista hasta el nodo en el índice especificado
         while (counter !== index) {
             currentNode = currentNode.next;
             counter++;
         }
 
         // Retornar el nodo en el índice especificado
         return currentNode;
     }
     push(value){
        const nodo = new Node(value);
        this.tail.next = nodo;
        this.tail = nodo;
        this.length = this.length + 1;

        return this.lenght;
     }

     unshift(value){
        console.log("Prueba unshift:")
        const nodo = new Node(value);// se hace un nodo nuevo
        nodo.next = this.head;//coloca el nodo cabeza, despues de este que se acaba de crear
        this.head = nodo;//pone este nodo como la cabeza
        this.length += 1; // se agraga 1 a la lista


        // Verifica si la lista tenía un solo nodo originalmente
        if (this.length === 1) {
            this.tail = nodo;//cambia el tail a otro valor o nodo
        }
        console.log(`return:`, this.lenght);
        return this.lenght;
     }

     existe(value){
        let actual = this.head
        while(actual !== null){
            if(actual.value === value){
                return true
            }
            actual = actual.next;
        }
        return false
     }

    insert(value){
        const newNode = new Node(value);
        console.log("insert")

        if(this.existe(value)){
            console.log(`El dato ${value} ya existe en la lista.`);
            return;
        }   

        if(this.head === null){
            this.head = newNode;// lista vacia, se agrega sin mas 
        }else{
            let actual = this.head
            while(actual.next !== null){
                actual = actual.next;
            }
             // Insertamos el nuevo nodo al final
             actual.next = newNode;
        }

        // // Verificar si el índice es válido
        // if (index < 0 || index > this.length) {
        //     return false;
        // }

        // // Insertar al principio de la lista
        // if (index === 0) {
        //     this.unshift(value);
        //     return value;
        // }

        // // Insertar al final de la lista
        // if (index === this.length) {
        //     this.push(value);
        //     return value;
        // }

        // Insertar en una posición intermedia

        this.length += 1;
        return value ;
    }
}







let lista = new LinkedList();//funcion

// lista.printList();
lista.insert(5);

lista.printList();
lista.insert(4);

lista.printList();
lista.insert(3);

lista.printList();
lista.insert(2);

lista.printList();
lista.insert(1);

lista.printList();

lista.insert(5);
lista.insert(4);

// lista.printList();



///////////////////////////////////////////////////////////////////////////



