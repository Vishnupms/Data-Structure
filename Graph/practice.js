class Graph{
    constructor(){
        this.adjecencyList = {}
    }
    addVertex(v){
        if(!this.adjecencyList[v]){
            this.adjecencyList[v] = []
        }
    }
    addEdge(v1,v2){
        this.adjecencyList[v1].push(v2)
        this.adjecencyList[v2].push(v1)
    }
    display(){
        for(let v in this.adjecencyList){
            console.log(v+ '->'+[...this.adjecencyList[v]])
        }
    }
    hasEdge(){
        return (
            this.adjecencyList[v1].includes(v2)&&
            this.adjecencyList[v2].includes(v1)
        )

    }
    removeEdge(v1,v2){
        this.adjecencyList[v1] = this.adjecencyList[v1].filter((v)=>v!==v2)
        this.adjecencyList[v2] = this.adjecencyList[v2].filter((v)=>v!==v1)
    }
    removeVertex(v){
        for(let adjVertex of this.adjecencyList[v]){
            this.removeEdge(v,adjVertex)
        }
        delete this.adjecencyList[v]
    }
}
const g = new Graph()
g.addVertex('A')
g.addVertex('B')
g.addVertex('C')
g.addEdge('A','B')
g.removeEdge('A','B')
g.display()
