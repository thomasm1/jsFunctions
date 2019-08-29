// trie data = structure tmm   Prefix tree used to store associative structures
let Node = function() {
	this.keys = new Map();
	this.end = false;
	this.setEnd = function() {
		this.end = true;
	}
	this.isEnd = function() {
		return this.end;
	};
};
//
let Trie = function() {
	
	this.root = new Node();
	
	this.add = function(input, node = this.root) {  // if pass in node, it will use. --- If not, it will use this.root
		if (input.length == 0){
			node.setEnd();
			return;
		} else if (!node.keys.has(input[0])) {  // there are more letters, not yet at end of word
			node.keys.set(input[0], new Node());    // if not, here we'll set it with method input[0] first letter. 
			return this.add(input.substr(1), node.keys.get(input[0])); // every letter after the first letter, than pass in node just created (node with letter 'B')
		} else { 
			return this.add(input.substr(1), node.keys.get(input[0]));  // if there was another of same letter (if already in try, not going start from [1]... rather new input substring)
		};
	};
	this.isWord = function(word) {			// checking if word in.. (doesn't need to check every word, only first letter, so faster indexing)
		let node = this.root;
		while (word.length > 1) {
			if (!node.keys.has(word[0]))  {
				return false;
			} else {
				node = node.keys.get(word[0]);
				word = word.substr(1);
				};
		};
 	//
	this.print = function() {   // helper function - create array of every word and searches 
	let words = new Array();
	let search = function(node, string) {
		if (node.keys.size != 0) {
			for (let letter of node.keys.keys()) {
				search(node.keys.get(letter), string.concat(letter));
			};
			if (node.is()) {
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

myTrie = new Trie()
myTrie.add('ball');
myTrie.add('bat');
myTrie.add('doll');
myTrie.add('do');
myTrie.add('dorm');
myTrie.add('send');
myTrie.add('sense');
console.log(myTrie.IsWord('doll'));
console.log(myTrie.IsWord('dor'));
console.log(myTrie.IsWord('dorf'));