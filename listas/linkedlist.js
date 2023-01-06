class Lista {
    constructor() {
        this.head = null;
    }
    addFirst(value){
        let newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
    }
    addLast(value) {
        if (this.head === null)
            this.head = new Node(value);
        else {
            let ref = this.head;
            while (ref.next !== null) {
                ref = ref.next;
            }
            ref.next = new Node(value);
        }
    }
    addMiddle(value, index, elements){
        if(index == 1 || index == elements+1 || index > elements || index === 0)
          return 'Esto no está entre dos elementos'
        else{
          let ref = this.head;
          let i = 1;
          while(i< index-1){
            ref = ref.next;
            i++
          }
          let newNode = new Node(value);
          newNode.next = ref.next;
          ref.next = newNode
          return this.head
        }
    }
    deleteLast(){
        if(this.head === null){
          return 'Lista vacía';
        }else{
          let ref = this.head;
          while(ref.next.next !== null){
            ref = ref.next;
          }
          ref.next = null;
        }
    }
    deleteFirst(){
        if(this.head === null){
            return 'Lista vacía';
        }else{
            this.head = this.head.next;
        }
    }
    deleteMiddle(index, elements){
        if(index == 1 || index == elements+1 || index >= elements || index === 0)
            return 'Esto no está entre dos elementos'
        else{
            let ref = this.head;
            let i = 1;
            while(i< index-1){
                ref = ref.next;
                i++
            }
            ref.next = ref.next.next;     
        }
    }
    movElements(start, end, elements){
        const condition  = (start > 0 && start <= elements);
        const condition2 = (end > 0 && end <= elements);
        const condition3 = (start !== end);
        if(!(condition && condition2 && condition3))
            return 'No es posible hacer esto'
        else{
            console.log(start, end, elements);
            let i = 1;
            let ref;
            let valToMove;
            if(start == 1){
                valToMove = this.head.value;
                this.head = this.head.next;
                ref = this.head;
            }
            else{
                ref = this.head;
                while(i < start -1){
                    ref = ref.next;
                    i++
                }       
                valToMove = ref.next.value;
                ref.next = ref.next.next;
            }
            ref = ref.next;
            while(i < end-2){
                ref = ref.next
                i++;
            }
            const newNode = new Node(valToMove);
            newNode.next = ref.next;
            ref.next = newNode;
        }
    }
    search(value) {
        let i = 0;
        if (this.head.value == value){
            console.log(i)
            return true;
        }
            
        else {
            let ref = this.head;
            while (ref.next != null) {
                i = i+1
                if (ref.next.value == value){
                    console.log(i)
                    return true;
                }
                ref = ref.next;
            }
        }
        return false;
    }
    numOfElements(){
        if(this.head == null)
            return 0
        else{
            let ref = this.head;
            let i = 1;
            while(ref.next != null){
                ref = ref.next;
                i++;
            }
          return i;
        }
    }
    getValue(){
        if(this.head === null)
            return 'Lista vacia';
        else{
            let values = [];
            let ref = this.head;
            while(ref.next !== null){
                values.push(ref.value)
                ref = ref.next;
            }
            values.push(ref.value);
            return values;
        }
    }
}

//Cada creamos nodo y valor.
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

let list = new Lista();
