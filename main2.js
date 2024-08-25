// 2.- Escribir un programa para formar una lista que realice las siguientes tareas:
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
        this.length = 0;
    }

    printList(){
        let temp = this.head;
        while(temp != null){
            console.log(temp.value);
            temp = temp.next;
        }


     }


     insert(value){
        const newNode = new Node(value);

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
        this.length += 1;
     }

     MayorA(value){
        let actual = this.head;
        console.log(`Los nodos con valor mayor a ${value}`);
        while(actual !==null){
            if(actual.value > value){
                console.log(actual.value);
            }
            // else{
            //     actual = actual.next; i++
            // }
            actual = actual.next;
        }
     }
}





//generar lista alatoria


function genListaAleatoria(lista, cantidad, maxValor){
    for (let index = 0; index < cantidad; index++) {
        let numeroAleatorio = Math.floor(Math.random() * maxValor) + 1;
        ll.insert(numeroAleatorio)
        
    }
}
const ll = new LinkedList(9);
genListaAleatoria(ll,10,100);

//const ll = new LinkedList(9);
console.log("Lista :");
ll.printList();


ll.MayorA(80);