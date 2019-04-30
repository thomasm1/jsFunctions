const years = [1990, 1976, 1999 ];

// es5
var ages5 = years.map(function(el) {
	return 2016 - el;
});
console.log(ages5);

// es6
let ages6 = years.map(el => 2016 - el);
console.log(ages6);

ages6 = years.map((el, index) => `Age element ${index + 1}: ${2016 - el}.`);