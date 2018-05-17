d3.csvParse("foo,bar\n1,2");
d3.tsvParse(foo\tbar\n1\t2);

d3 csvFormat([{foo: "1", bar: "2"}]); // "foo,bar\n1,2"
d3.tsvFormat([{foo: "1", bar: "2"}]); // "foo\tbar\n1\t2"

var psv = d3.dsvFormat("|");
console.log(psv.parse("foo|bar\n1|2")); // [{foo: "1", bar: "2"}, columns: ["foo", "bar"]]
