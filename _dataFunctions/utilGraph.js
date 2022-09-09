
class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    
    addVertex(vtx) {
        if(!this.adjacencyList[vtx]) this.adjacencyList[vtx] = []; 
    }
    addEdge(vtx1,vtx2) {
        this.adjacencyList[vtx1].push(vtx2);
        this.adjacencyList[vtx2].push(vtx1);
    }
    removeEdge(vtx1,vtx2) {
        this.adjacencyList[vtx1]= this.adjacencyList[vtx1].filter( (v)=>v !== vtx2 );
        this.adjacencyList[vtx2]= this.adjacencyList[vtx2].filter( (v)=>v !== vtx1 );
    } 
    removeVertex(vtx) {
        while(this.adjacencyList[vtx].length){
            const adjacentVertex = this.adjacencyList[vtx].pop();
            this.removeEdge(vtx,adjacentVertex);
        }
        delete this.adjacencyList[vtx]
    }
}

let g = new Graph();
g.addVertex("a");
g.addVertex("b");
g.addVertex("c");
g.addVertex("d");
g.addEdge("a","c");
g.addEdge("a","b");
g.addEdge("c","d");
console.log(g)


// DepthFirst Recursion
const depthFirstRecursion = function( graph, src, print=false) {
    let localPrint = print;
    if(localPrint === true) {console.log(src)};
    for(let neighbor of graph[src]){
        this.depthFirstRecursion(graph, neighbor, lcoalPrint);
    }
}

// DepthFirst Iteration
const depthFirstIteration = function (graph, src, print=false){
    const stack = [src];
    while(stack.length > 0 ){
        const current = stack.pop();
        if(print === true) {console.log(current)}
        for (let neighbor of graph[current]) {
            stack.push(neighbor);
        }
    }
}