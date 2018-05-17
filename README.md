# jsFunctions
data-focused js functions, direct relevance to D3js Sankey/Hierarchical Data Structures
JS FUNCTIONS:  Trie Data Structures, Stacks, Queue, Priority Queue 

Files: 
# stackAndQueue.html
# ES6MethodsPolyfill.js: 
    jquery-ES6 method compare and browser polyfills
#trieDataStructure.js
    Trie - this.add, this.isWord, this.print
#
# jsFunctions
data-focused js functions, direct relevance to D3js Sankey/Hierarchical Data Structures
JS FUNCTIONS:  Trie Data Structures, Stacks, Queue, Priority Queue 

Files: 
# stackAndQueue.html
# ES6MethodsPolyfill.js: 
    jquery-ES6 method compare and browser polyfills
#trieDataStructure.js
    Trie - this.add, this.isWord, this.print
#
```js
d3.csvParse("foo,bar\n1,2"); // [{foo: "1", bar: "2"}, columns: ["foo", "bar"]]
d3.tsvParse("foo\tbar\n1\t2"); // [{foo: "1", bar: "2"}, columns: ["foo", "bar"]]
```

Or to format:

```js
d3.csvFormat([{foo: "1", bar: "2"}]); // "foo,bar\n1,2"
d3.tsvFormat([{foo: "1", bar: "2"}]); // "foo\tbar\n1\t2"
```

To use a different delimiter, such as “|” for pipe-separated values, use [d3.dsvFormat](#dsvFormat):

```js
var psv = d3.dsvFormat("|");

console.log(psv.parse("foo|bar\n1|2")); // [{foo: "1", bar: "2"}, columns: ["foo", "bar"]]
```

For easy loading of DSV files in a browser, see [d3-request](https://github.com/d3/d3-request)’s [d3.csv](https://github.com/d3/d3-request#csv) and [d3.tsv](https://github.com/d3/d3-request#tsv) methods.

## Installing

If you use NPM, `npm install d3-dsv`. Otherwise, download the [latest release](https://github.com/d3/d3-dsv/releases/latest). You can also load directly from [d3js.org](https://d3js.org), either as a [standalone library](https://d3js.org/d3-dsv.v1.min.js) or as part of [D3 4.0](https://github.com/d3/d3). AMD, CommonJS, and vanilla environments are supported. In vanilla, a `d3` global is exported:

```html
<script src="https://d3js.org/d3-dsv.v1.min.js"></script>
<script>

var data = d3.csvParse(string);

</script>
```