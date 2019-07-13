// Undirected & Directed Braphs
console.log(
    "%c GRAPHS, Adjacency Lists: ",
    "color:white; background-color:darkblue"
  );
  console.log(
    "%c Undirected Graph: ",
    "color:darkblue; background-color:aliceblue"
  );
  // Adjacency List
  var undirectedGraph = {
    NodeA: ["NodeB"],
    NodeB: ["NodeA", "NodeC"],
    NodeC: ["NodeB"],
    NodeD: ["NodeA", "NodeC", "NodeD"]
  };
  console.log(
    "NodeA",
    undirectedGraph.NodeA,
    "NodeB: ",
    undirectedGraph.NodeB,
    "NodeC",
    undirectedGraph.NodeC,
    "NodeD",
    undirectedGraph.NodeD
  );
  console.log(
    "%c Undirected Graph Arr:",
    "color:darkblue; background-color:aliceblue"
  );
  var undirectedGraphArray = {
    NodeA: [1],
    NodeB: [0, 2],
    NodeC: [1],
    NodeD: [0, 1, 2]
  };
  console.log(
    "NodeA",
    undirectedGraphArray.NodeA,
    "NodeB: ",
    undirectedGraphArray.NodeB,
    "NodeC",
    undirectedGraphArray.NodeC,
    "NodeD",
    undirectedGraphArray.NodeD
  );
  
  console.log(
    "%c Adjacency Matrix: ",
    "color:darkblue; background-color:aliceblue"
  );
  var adjacencyMatrix = [[0, 1, 0], [1, 0, 1], [0, 1, 0]];
  console.log(adjacencyMatrix);
  
  console.log(
    "%c Incidence Matrix: ",
    "color:darkblue; background-color:aliceblue"
  );
  var incidenceMatrixDir = [
    [1, 0, -1, 1],
    [-1, 1, 0, 0],
    [0, -1, 1, 0],
    [0, 0, 0, -1]
  ];
  console.log(incidenceMatrixDir);
  