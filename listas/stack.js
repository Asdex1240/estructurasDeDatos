class Stack {
    
    constructor() {
        this.head = null;
    }

    addValue(value){
        if(this.head == null)
          this.head = new Node(value);
        else{
          let node = new Node(value);
          node.next = this.head;
          this.head = node;
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

let stack = new Stack;
stack.addValue(5);
stack.addValue(2);
stack.deleteValue();
console.log(stack)