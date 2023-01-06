
//Esto es un arbol binario usando grafos
class Grafo {
  constructor(){
    this.head = null;
  }
  addValue(value){
    if(this.head == null)
      this.head = new Node(value);
    else{
      let ref = this.head;
      let found = false;
      while(!found){
        if(value <= ref.value && ref.men != null)
          ref = ref.men;
        else if(value > ref.value && ref.may != null)
          ref = ref.may;
        else
          found = true;
      }
      let node = new Node(value);
      if(value <= ref.value)
        ref.men = node;
      else
        ref.may = node;
    }
  }
}

class Node {
    constructor(value){
        this.men = null;
        this.value = value;
        this.may = null;
    }
}

let grafo = new Grafo();
grafo.addValue(3);
grafo.addValue(2);
grafo.addValue(4);
grafo.addValue(1);
grafo.addValue(3);
