
class GraphWeighted extends Graph {
    constructor(){
        this.adjacencyList = {};
    }
    addVertexWeight(vtx) {
        if (!this.adjacencyList[vtx]) this.adjacencyList[vtx] = []; 
    } 
    addEdge(vtx1, vtx2, weight) {
        this.adjacencyList[vtx1].push({node:vtx2, weight:weight});
        this.adjacencyList[vtx2].push({node:vtx1, weight:weight});
    }
    removeEdge(vtx1,vtx2) {
        this.adjacencyList[vtx1]= this.adjacencyList[vtx1].filter( (v)=>v.node !== vtx2.node );
        this.adjacencyList[vtx2]= this.adjacencyList[vtx2].filter( (v)=>v.node !== vtx1.node );
    }  
}
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

    depthFirstRecursion(start) {
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList /// lose 'this' in IFFE
        
        // Helper IFFE recursion function 
        (function dfsHelper(vertex) {
            if (!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach(neighbor => { // Lost 'this'
                if(!visited[neighbor]) { 
                    return dfsHelper(neighbor)
                }
            })
        })(start);
        return result;
    }

    depthFirstIteration(start) {
        const stack = [start]; // ['a']
        const result = [];
        const visited = {};
        let currentVertex;

        visited[start] = true; // {'visited':{'a':true,'b':false}
        while(stack.length) {
            console.log(stack);
            currentVertex = stack.pop()
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    visited[neighbor] = true;
                    stack.push(neighbor)
                }
            })
        }
        return result;
    }

    // QUEUE: ['a'] ==>[] => ['b','c'] ==> ['c']
    // RESULT: [] ==> ['a'] ==> ['a','b']
    breadthFirstRecursion(start) {
        const queue = [start];
        const result = [];
        const visited = {};
        let currentVertex;

        while(queue.length){
            console.log(queue);
            currentVertex = queue.shift();
            result.push(currentVertex);
            
            this.adjacencyList[currentVertex].slice().reverse().forEach(neighbor => {               
            // this.adjacencyList[currentVertex].forEach(neighbor => {
                if(!visited[neighbor]) { 
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            })
        }
        return result;
    }
}

let g = new Graph();
g.addVertex("a");
g.addVertex("b");
g.addVertex("c");
g.addVertex("d");
g.addVertex("e");
g.addVertex("f");
g.addEdge("a","b");
g.addEdge("a","c");
g.addEdge("b","d");
g.addEdge("c","e");
g.addEdge("d","e");
g.addEdge("d","f");
g.addEdge("e","f");
console.log(g)


// DepthFirst Recursion
const depthFirstRecursionPrint = function( graph, src, print=false) {
    let localPrint = print;
    if(localPrint === true) {console.log(src)};
    for(let neighbor of graph[src]){
        this.depthFirstRecursionPrint(graph, neighbor, localPrint);
    }
}

// DepthFirst Iteration
const depthFirstIterPrint = function (graph, src, print=false){
    const stack = [src];
    while(stack.length > 0 ){
        const current = stack.pop();
        if(print === true) {console.log(current)}
        for (let neighbor of graph[current]) {
            stack.push(neighbor);
        }
    }
}