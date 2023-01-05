class Grafo {
    constructor(){
      this.head = null;
    }
    addValue(value){
      if(this.head == null)
        this.head = new Node(value);
      else{
        let ref = this.head;
        
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
  grafo.addValue(2);
  grafo.addValue(3);
  //grafo.addValue(1);
  
  console.log(grafo);
