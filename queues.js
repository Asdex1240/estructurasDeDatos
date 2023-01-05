class Queue {
    
    constructor() {
        this.head = null;
    }

    addValue(value){
        if(this.head == null)
          this.head = new Node(value);
        else{
          let ref = this.head;
          while(ref.next !== null){
            ref = ref.next;
          }
          let node = new Node(value);
          ref.next = node;
        }
    }

    deleteValue(){
      this.head = this.head.next;
    }

}
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

let cola = new Queue;
cola.addValue(1);
cola.addValue(2);
cola.deleteValue();
console.log(cola);