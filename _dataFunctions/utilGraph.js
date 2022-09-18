
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
    addEdgeFrom2Vertices(vtx1,vtx2) {
        if(!(vtx1 in this.adjacencyList)) this.adjacencyList[vtx1] = []
        this.adjacencyList[vtx1].push(vtx2);
        if(!(vtx2 in this.adjacencyList)) this.adjacencyList[vtx2] = []
        this.adjacencyList[vtx2].push(vtx1);
    }
    // accepts multiple edge-arrays
    // g.addEdgesFromArray(['y','z'],['z','w'],['w','e'])
    addEdgesFromArray(...edgesArr) {   /// ...spreading arr apart 
        for(let edge of edgesArr){                                      ///  for <value> of ....
            const [vtxA,vtxB] = edge;
            if(!(vtxA in this.adjacencyList)) this.adjacencyList[vtxA] = []; /// for <key> in .... 
            this.adjacencyList[vtxA].push(vtxB);
            if(!(vtxB in this.adjacencyList)) this.adjacencyList[vtxB] = []
            this.adjacencyList[vtxB].push(vtxA); 
        }
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
    //// Graph Traverse
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
    breadthFirstRecursion(start) {
        const queue = [start];
        const result = [];
        const visited = {};
        let currentVertex;
        while(queue.length){
            console.log(queue);
            currentVertex = queue.shift();
            result.push(currentVertex);
            
            // QUEUE: ['a'] ==>[] => ['b','c'] ==> ['c']
            // RESULT: [] ==> ['a'] ==> ['a','b']
            this.adjacencyList[currentVertex].forEach(neighbor => {
                // this.adjacencyList[currentVertex].slice().reverse().forEach(neighbor => {               
                    if(!visited[neighbor]) { 
                        visited[neighbor] = true;
                    queue.push(neighbor);
                }
            })
        }
        return result;
    } 
    breadthFirstIteration(start){
        const queue = [start]; // initiate start
        while(queue.length>0){
            const current = queue.shift();
            console.log(current);
            for (let neighbor of this.adjacencyList[current]){
                queue.push(neighbor)
            } 
        }
    }
}

let g = new Graph();
g.addVertex("a");
g.addVertex("b");
g.addVertex("c");
g.addVertex("d");
g.addVertex("e");
g.addVertex("f");
g.addEdgeFrom2Vertices("a","b");
g.addEdgeFrom2Vertices("a","c");
// g.addEdgeFrom2Vertices("b","d");
g.addEdgeFrom2Vertices("c","e");
g.addEdgeFrom2Vertices("d","e");
g.addEdgeFrom2Vertices("d","f");
g.addEdgeFrom2Vertices("e","f");
g.addEdgesFromArray(['f','x']) 
g.addEdgesFromArray(['x','y'],['y','z'],['z','w']) 

console.log("depthFirstRecursion /// Bug line 42") /// Bug line 42
// g.depthFirstRecursion('a')
console.log("depthFirstIteration")
g.depthFirstIteration('a')
console.log("breadthFirstRecursion")
g.breadthFirstRecursion('a')
console.log("breadthFirstIteration Bug? traversing indefinitely") /// Bug? traversing indefinitely in cyclic graph
// g.breadthFirstIteration('a') 
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
    //// Graph Explore   *Not working
    // undirectedGraph(edgesArr,vertexA,vertexB) { // Returns Boolean if vertex coords are among node edges
    //     const adjacencyList = addEdgesFromArray(edgesArr)
    //     return hasPath(adjacencyList,vertexA,vertexB, new Set())
    // }
    // hasPath(adjacencyList, source, target, visited) {
    //     if(source===target) return true;
    //     if(visited.has(source)) return false;  // <==visited implies set()
    //     visited.add(source);
    //     for(let adjacentVertex of this.adjacencyList[source]){ /// checking object values, i.e. neighbs
    //         if(hasPath(adjacencyList, adjacentVertex, target, visited) === true){  // RECURSION 
    //             return true;
    //         }
    //     }
    //     return false
    // }
}