 
class StackObject  {
   constructor() {
	this.stackLen = 0;
    this.storage = {};
   }
    // Adds a value onto end of stack  ... {2:"value2"}
    push (value) {
        this.stackLen++;
        this.storage[this.stackLen] = value; // {1:"value1"}
    }
    // Removes and returns a value at the end of stack
    pop () {
        if (this.stackLen === 0) {
            return undefined;
        }
        const result = this.storage[this.stackLen]; // {1:"value2"}
        delete this.storage[this.stackLen];
        this.stackLen--;
        return result;
    }
   size () {
        return this.stackLen;
    }
    // Returns value at the end of the stack (BUT DOES NOT REMOVE ITEM)
    peek () {
        return this.storage[this.stackLen];
    }
};
let stackObj = new StackObject();
stackObj.push("string in stack")
stackObj.push([1,2,3,4])
stackObj.push(7)
console.log(stackObj.size()) 
console.log(stackObj)
console.log(stackObj.pop())
console.log(stackObj.size())

class PriorityQueueArray { 
	constructor(){
		this.queue = []; // collect items in queue 
	}
    print () {   // document.write(queue);
		console.log(this.queue)
    };  
    enqueue (element) { // pushes first item on q
        this.queue.push(element);
    };
	qPriority(val,priority) {
		this.queue.push({ val, priority});
		this.sort(); 
	}
	sort(){
		this.queue.sort((a,b) => a.priority - b.priority)
	}
    dequeue () { // pulls off queue[0] in array , returns it
        return this.queue.shift(); // 
    };
    front() { //   returns item queue[0], (no remove)
        return this.queue[0];
    };
    size()  {  
        return this.queue.length;
    };
    isEmpty () {
        return (this.queue.length === 0);
    };
}
let q = new PriorityQueueArray()
q.enqueue("string in queue")
q.enqueue([11,22,33,44])
q.enqueue(77)
q.qPriority("a",3)
q.qPriority("b",2)
q.enqueue([11,22,33,44])
q.qPriority("c",33)
q.qPriority("d",4)  
console.log(q.size())
console.log(q);
console.log(q.dequeue())
console.log(q.size())
   
class MaxBinaryHeap {
	constructor() {
		this.values = []
	}
	get() {
		return this.values;
	}
	insert(el) {
		this.values.push(el);
		this.bubbleUp();
	}
	bubbleUp() {
		let idx = this.values.length - 1; // start at end, i.e. newly pushed
		const element = this.values[idx]
		while (idx > 0){
			let parentIdx = Math.floor((idx-1)/2);
			let parent = this.values[parentIdx];
			if(element <= parent) 
				break;   // compare with parent
			this.values[parentIdx] = element // SWAP
			this.values[idx] = parent; // SWAP
			idx = parentIdx;
		}
	}
}
let maxHeap = new MaxBinaryHeap()
 maxHeap.insert(12) 
 maxHeap.insert(2)  
 maxHeap.insert(1233) 
 maxHeap.insert(222) 
 console.log(maxHeap.get())
 
 // priorityHeap
class PriorityQueueHeap {
	constructor() {
		this.values = [];
	}
	enqueue(val, priority) {
		let newNode = new PriorityNode(val, priority)
		this.values.push(newNode);
		this.bubbleUp();
	}
	bubbleUp() {
		let idx = this.values.length - 1; // start at end, i.e. newly pushed
		const element = this.values[idx]
		while (idx > 0){
			let parentIdx = Math.floor((idx-1)/2);
			let parent = this.values[parentIdx];
			if(element.priority >= parent.priority) 
				break;   // compare with parent
			this.values[parentIdx] = element // SWAP
			this.values[idx] = parent; // SWAP
			idx = parentIdx;
		}
	}
	dequeue() {
		const min = this.values[0];
		const end = this.values.pop();
		if(this.values.length > 0) {
			this.values[0] = end;
			this.sinkDown()
		}
		return min;
	}
	sinkDown() {
		let idx = 0;
		const length = this.values.length;
		const element = this.values[0];
		while(true) { 
				let leftChildIdx = 2 * idx +1;   // left leaf
				let rightChildIdx = 2 * idx +2;  // right leaf
				let leftChild,rightChild;
				let swap = null; 

				if (leftChildIdx < length) {
					leftChild = this.values[leftChildIdx];
					if(leftChild.priority < element.priority) {
						swap = leftChildIdx;
					}
				}
				if (rightChildIdx < length) {
					rightChild = this.values[rightChildIdx];
					if(
						(swap === null && rightChild.priority < element.priority) ||
						(swap !== null && rightChild.priority < leftChild.priority) 				
							) {
						swap = rightChildIdx;
					}
				}
				if(swap ===null) 
				break;
				this.values(idx) = this.values[swap];
				this.values[swap] = element;
				idx = swap;
			}
	}
}

class PriorityNode {
	constructor(val, priority) {
		this.val = val;
		this.priority = priority;
	}
}
let pq = new PriorityQueueHeap();
pq.enqueue("low priority", 5)
pq.enqueue("utmost", 1)
pq.enqueue("nonemergency", 3)
pq.enqueue("less nonemergency", 4)
console.log(pq)


//////////// TRIE   
// trie data = structure  Prefix tree used to store associative structures
class TrieNode {
	constructor() {
		this.keys = new Map();
		this.end = false;
		this.setEnd = () => this.end = true; 
		this.isEnd  = () =>  this.end; 
	};
}

 class Trie  {
	constructor() { 
	this.root = new TrieNode(); 
	}
	 add (inputArr, node = this.root) {  // if pass in node, it will use. --- If not, it will use this.root
		if (inputArr.length == 0){
			node.setEnd();
			return;
		} else if (!node.keys.has(inputArr[0])) {  // first letter not there; there are more letters, not yet at end of word
			node.keys.set(inputArr[0], new TrieNode());    // if not, here we'll set it with method input[0] first letter. 
			return this.add(inputArr.substr(1), node.keys.get(inputArr[0])); // every letter after the first letter, than pass in node just created (node with letter 'B')
		} else { 
			return this.add(inputArr.substr(1), node.keys.get(inputArr[0]));  // if there was another of same letter (if already in try, not going start from [1]... rather new input substring)
		};
	};
    isWord(word) {			// checking if word in.. (doesn't need to check every word, only first letter, so faster indexing)
		let node = this.root; 		
		while (word.length > 1) {    //////////// TRIE   <===========Not returning correctly
			if (!node.keys.has(word[0]))  {
				return false;
			} else {
				node = node.keys.get(word[0]);
				word = word.substr(1); 
				};
		};
		return node.keys.has(word) && node.keys.get(word).isEnd()? true: false;
	}
 	print() {   // helper function - create array of every word and searches 
	let words = new Array();
	let search = function(node, string) {
		if (node.keys.size != 0) {
			for (let letter of node.keys.keys()) {
				search(node.keys.get(letter), string.concat(letter));
			};
			if (node.isEnd()) {
				words.push(string);
			};
		} else {
			string.length > 0 ? words.push(string) : undefined;
			return;
		};
	};
	search(this.root, new String());
	return words.length > 0 ? words : null;
	};		
};  

let myTrie = new Trie()
myTrie.add('ball');
myTrie.add('bat');
myTrie.add('doll');
myTrie.add('do');
myTrie.add('dorm');
myTrie.add('send');
myTrie.add('sense'); 
// myTrie.print()
console.log(myTrie.isWord('xoll'));
console.log(myTrie.isWord('doll'));
console.log(myTrie.isWord('dor'));
console.log(myTrie.isWord('brat'));
console.log(myTrie.isWord('dorf'));
console.log(myTrie.print())

 