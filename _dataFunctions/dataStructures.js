 
const StackObject = function () {
    this.stackLen = 0;
    this.storage = {};
    // Adds a value onto end of stack  ... {2:"value2"}
    this.push = function (value) {
        this.stackLen++;
        this.storage[this.stackLen] = value; // {1:"value1"}
    }
    // Removes and returns a value at the end of stack
    this.pop = function () {
        if (this.stackLen === 0) {
            return undefined;
        }
        const result = this.storage[this.stackLen]; // {1:"value2"}
        delete this.storage[this.stackLen];
        this.stackLen--;
        return result;
    }
    this.size = function () {
        return this.stackLen;
    }
    // Returns value at the end of the stack (BUT DOES NOT REMOVE ITEM)
    this.peek = function () {
        return this.storage[this.stackLen];
    }
};

function QueueArray() {
    collection = []; // collect items in queue
    this.print = function () {
        document.write(collection);
    }; // helper function
    this.enqueue = function (element) { // pushes first item on q
        collection.push(element);
    };
    this.dequeue = function () { // takes item off queue
        return collection.shift(); // pulls off first item in array , returns it
    };
    this.front = function () { // this returns item at 0 index, (no remove)
        return collection[0];
    };
    this.size = function () { // length method
        return collection.length;
    };
    this.isEmpty = function () {
        return (collection.length === 0);
    };
}



// max heap
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
 maxHeap.insert(112)  
 maxHeap.insert(133)  
 maxHeap.insert(1233) 
 maxHeap.insert(222) 
 console.log(maxHeap.get())
 
 // priorityHeap
class PriorityQueue {
	constructor() {
		this.values = [];
	}
	enqueue(val, priority) {
		let newNode = new Node(val, priority)
		this.values.push(newNode);
		this.bubbleUp();
	}
}

//////////// TRIE   <===========Not returning corectly
// trie data = structure  Prefix tree used to store associative structures
class Node {
	constructor() {
		this.keys = new Map();
		this.end = false;
		this.setEnd = function() {
			this.end = true;
		}
		this.isEnd = function() {
			return this.end;
		};
	};
}

 class Trie  {
	constructor() {
			
	this.root = new Node(); 
	}
	 add (inputArr, node = this.root) {  // if pass in node, it will use. --- If not, it will use this.root
		if (inputArr.length == 0){
			node.setEnd();
			return;
		} else if (!node.keys.has(inputArr[0])) {  // first letter not there; there are more letters, not yet at end of word
			node.keys.set(inputArr[0], new Node());    // if not, here we'll set it with method input[0] first letter. 
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
				return true;
				};
		};
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
myTrie.print()
console.log(myTrie.isWord('xoll'));
console.log(myTrie.isWord('doll'));
console.log(myTrie.isWord('dor'));
console.log(myTrie.isWord('brat'));
console.log(myTrie.isWord('dorf'));


