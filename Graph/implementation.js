class Graph{
    constructor(){
        this.adjecencyList = {}
    }
    // adding a vertex
    addVertex(vertex){
        if(!this.adjecencyList[vertex]){
            this.adjecencyList[vertex] = []
        }
    }
    //adding edge
    addEdge(vertex1,vertex2){
        this.adjecencyList[vertex1].push(vertex2);
        this.adjecencyList[vertex2].push(vertex1);
    }
    display(){
        for(let vertex in this.adjecencyList){
            console.log(vertex + ' -> ' + [...this.adjecencyList[vertex]])
        }
    }
    hasEdge(vertex1 ,vertex2){
        return(
            this.adjecencyList[vertex1].includes(vertex2) &&
            this.adjecencyList[vertex2].includes(vertex1)
        )
    }
    removeEdge(v1,v2){
        this.adjecencyList[v1] = this.adjecencyList[v1].filter((v) => v !== v2);
        this.adjecencyList[v2] = this.adjecencyList[v2].filter((v) => v !== v1);
    }
    removeVertex(vertex){
       for(let adjVertex of this.adjecencyList[vertex]){
        this.removeEdge(vertex,adjVertex)
       }
       delete this.adjecencyList[vertex]
    }
      depthFirstRecursive(start) {
    const result = [];
    const visited = {}; 
    const adjecencyList = this.adjecencyList;

    (function dfs(vertex) {
      if (!vertex) return null;
      visited[vertex] = true;
      result.push(vertex);
      adjecencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          return dfs(neighbor);
        }
      });
    })(start);
    return result;
  }
  breadthFirst(start) {
    const queue = [start];
    const result = [];
    const visited = {};
    let currentVertex;
    while (queue.length) {
      currentVertex = queue.shift();
      result.push(currentVertex);
      this.adjecencyList[currentVertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    return result;
  }


}
const g = new Graph()
g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");


g.addEdge("A", "B");
g.addEdge("A", "C");
g.addEdge("B", "D");



g.display()
console.log(g.hasEdge('A','C'))
console.log(g.depthFirstRecursive('B'))
console.log(g.breadthFirst('A'))




