// QUEUES
console.log("%c QUEUES BEGN: ", "color:white; background-color:blue");

export default function DataQueue() {
  let collection = [];
  this.print = function() {
    console.log(collection);
  };
  this.enqueue = function(element) {
    collection.push(element);
  };
  this.dequeue = function() {
    collection.shift();
  };
  this.front = function() {
    return collection[0];
  };
  this.size = function() {
    return collection.length;
  };
  this.isEmpty = function() {
    return collection.length === 0;
  };
}

var q = new DataQueue();
q.enqueue("a");
q.enqueue("b");
q.enqueue("c");
q.print();
q.dequeue();
console.log(q.front());
q.print();

//PRIORITY QUEUES

function PriorityQueue() {
  let collection = [];
  this.printCollection = function() {
    console.log(collection);
  };
  this.enqueue = function(element) {
    if (this.isEmpty()) {
      collection.push(element);
    } else {
      var added = false;
      for (var i = 0; i < collection.length; i++) {
        if (element[1] < collection[i][1]) {
          collection.splice(i, 0, element);
          added = true;
          break;
        }
      }
      if (!added) {
        collection.push(element);
      }
    }
  };
  this.dequeue = function() {
    var value = collection.shift();
    return value[0];
  };
  this.front = function() {
    return collection[0];
  };
  this.size = function() {
    return collection.length;
  };
  this.isEmpty = function() {
    return collection.length === 0;
  };
}
var pq = new PriorityQueue();
pq.enqueue(["Thomasm", 2]);
pq.enqueue(["Milton", 3]);
pq.enqueue(["Thomasm Milton", 2]);
pq.enqueue(["Boring!", 1]);
pq.printCollection();
pq.dequeue();
