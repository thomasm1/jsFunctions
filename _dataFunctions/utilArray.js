const $$$$ = (tag) => {
   let elems =  document.querySelector(tag);
    if (tag.length == 0) return null;
    if (elems.length == 1) return elems[0]
    if (tag.length >1)     return elems
    } 
 
 
// Sufficient words in paragraph
const ransomNote = function (notetext, availText) {
    let noteArray = notetext.split(' ');
    let availArray = availText.split(' ');
    let mapper = {}
    availArray.forEach((word) => {
        if (!mapper[word]) {
            mapper[word] = 0;
        }   
        mapper[word]++; // mapping available's count
        })
    console.log(availArray, noteArray, mapper)
    let possible = true;
    noteArray.forEach((word)=>{
        if(mapper[word]) { 
            mapper[word]--;
            if(mapper[word]<0) possible = false;
        } else {
        possible = false;
        }   
    })
    return possible
}
console.log(ransomNote('I know a cat', 'where there is a cat in the world and there am I'))

// Flatten 2d arrays 
let array2d = [ [1,2],[3,4,5],[6,7,8]] 
const flatArray = array2d.reduce((accumulator, current) => {
    return accumulator.concat(current);
}) 
console.log(flatArray)

const reverseInplace = function (string) {
    // let arr = string.split(""); // [w,a,t,c,h]
    let arr = [...string] //  [w,a,t,c,h]
    for (let i = 0; i < arr.length / 2; i++) {   // divide len by 2!!!
        let temp = arr[i]  //s,t,r,
        arr[i] = arr[arr.length - 1 - i]  //  temp lose first
        arr[arr.length - 1 - i] = temp; // rebuild from back
    }
    let5
     reverse = arr.join("")
    console.log(reverse)
    return reverse
}
// reverseInplace("watch")

const maxStockProfit = function (pricesArr) {
    let maxProfit = -1;
    let buyPrice = 0;
    let sellPrice = 0;
    let nextBuyPrice =true;
    for (var i = 0; i< pricesArr.length;i++){
        if(nextBuyPrice){ 
            buyPrice = pricesArr[i]
        } 
        sellPrice = pricesArr[i+1]
        if(sellPrice<buyPrice) nextBuyPrice=true;
        else{
            let tempProfit = sellPrice-buyPrice;
            if(tempProfit>maxProfit) maxProfit = tempProfit;
            nextBuyPrice = false;
        }
    }
    return maxProfit;
}
console.log(maxStockProfit([23,24,22,26,23,20,25]))

////// MEMOIZE 
//   adds 10 to provided value and takes it from cache if it was already calculated.

const memoizeAdd = () => {
    let cache = {}
    
    return value => {
        if (value in cache) {
            console.log("fetching from cache");
            return cache[value];
        } 
        else {
            console.log('calculating ....');
            const result = value + 100;
            cache[value] = result;
            return result
        }
    }
}
const newAdd = memoizeAdd();
console.log(newAdd(9))
console.log(newAdd(9)) // cached


////// Fibonacci Memo
const fibMemo = function (position, cache) {
    cache = cache || [];
    if (cache[position]) {
        return cache[position];
    } else {
        if (position < 3) {
            return 1;
        } else {
            cache[position] = fibMemo(position - 1, cache) + fibMemo(position - 2, cache);
        }
    }
    
    return cache[position]
}
// console.log(   fibMemo(20) )


////// PRIMES
const sieve = (num) => {
    let arr = [];
    for (let i = 0; i <= num; i++) {
        arr[i] = true;
    }
    arr[0], arr[1] = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        for (let j = 2; j * i < num; j++) {
            arr[i * j] = false;
        }
    }
    let primes = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) primes.push(i);
    }
    return primes
}
// console.log(sieve(19))


let nCount = 0;
let throttleCount = 0;
let debounceCount = 0;
let nCountDiv = $$$$("#nCountDiv")
let throttleCountDiv =$$$$("#throttleCountDiv")
let debounceCountDiv =$$$$("#debounceCountDiv")

const counterId = $$$$("#counterId")
 
const  normalCounter = function() {
    nCount++;
    nCountDiv.innerHTML = `nCount: ${nCount}`;
}
let fireThrottle = true;

////// THROTTLE
const  throttleCounter = function() {
   if (fireThrottle == true) {
    throttleCount++
    throttleCountDiv.innerHTML = `throttleCount: ${throttleCount}`;
    fireThrottle = false;
    setTimeout(function(){
        fireThrottle = true;
    },500)
   }
}


///// DEBOUNCE
let debounceTimer
const debounceCounter = function(){
   window.clearTimeout(debounceTimer);
   debounceTimer = setTimeout(function() {
       debounceCount++
       debounceCountDiv.innerHTML = `debounceCount: ${debounceCount}`;
   },500)
}

counterId.addEventListener("mousemove", function(){
    normalCounter()
    throttleCounter() 
    debounceCounter()
} )
 
////// Closure
const getSecret = () => {
    const secret = "my secret"
    return () => secret;
}
const accessSecret = getSecret();
// console.log(accessSecret());  // my secret
const closure = function () {
    let count = 0;
    return {
        increment: function (val = 1) {
            count += val
        },
        getValue: function () { return count }
    }
}
const counter = closure();
// console.log(counter.getValue());
// counter.increment();
// console.log(counter.getValue());
// counter.increment();
// console.log(counter.getValue());
console.dir(counter.getValue, { color: true })




////// Currying  
let weirdNum = '000023.456'
const priceDiscount =  (price) => {
    return (discount) =>  {
        if(!isNaN(price) && price>0) {
            price = Number(parseFloat(price)).toFixed(2);
            if(!isNaN(discount) && discount<1 && discount>0){
                return Number(discount * price).toFixed(2);
            }
        } else { console.log("not a good price")}
    }
}
console.log(priceDiscount(weirdNum)(.23))

const curry = function (fn) {
    var clarity = fn.length;
    return function f1(...args) {
        if(args.length >= clarity){
            return fn(...args);
    } else {
        return function f2(...moreArgs) {
            let newArgs = args.concat(moreArgs);
            return f1(...newArgs);
        }
    }
    }
}
const get = curry((property, object) => object[property]);
const getId = get("id");
const map = curry((fn, values) => values.map(fn));
const getIds = map(getId);

console.log(getId, [{id:1}])
console.log(getIds([{id:1}]))
console.log(getIds([{id:1,id:2}]))


////// BIND 
// let coord = {
    //     x:23,y:44
    // }
    // let count = function() { 
        //     return `${this.x},${this.y}`
// }
// count() // NaN for
// let boundFunc = count.bind(coord)
// console.log(boundFunc())
// //  boundFunc()

////// CALLl
const myLanguages = function (lang1, lang2, lang3) {
   return `My name is ${this.name} and I know ${lang1},  ${lang2},  ${lang3}`   
}
let person1 = { name: 'thomas'}
console.log(myLanguages.call(person1, 'javaScript','python','java'))


////// Shallow Compare
const typeOf = (input) => {
    const rawObject = Object.prototype.toString.call(input).toLowerCase();
    const typeOfRegex = /\[object (.*)]/g;
    const type = typeOfRegex.exec(rawObject)[1]
    return type
}
const shallowCompare = (source, target) => {
    if(typeOf(source) !== typeOf(target)) {
        return false;
    }
    if(typeOf(source) ==="array"){
        if(source.length !== target.length) { 
            return false;
        }
        return source.every((el, index) => el === target[index]);
    }
    if(typeOf(source) ==="object"){
        if(Object.keys(source).length !== Object.keys(target).length) { 
            return false;
        }
        return Object.keys(source).every((key) => source[key] === target[key]);
    }
    
    return source === target;
}
console.log(shallowCompare([1],[1])) 
console.log(shallowCompare({a:1},{a:1})) 

//// ITERABLES
let array = [4,5];
let itr = array[Symbol.iterator]();
console.log(itr.next())   // Returns Object {value:4, done:false }
console.log(itr.next())   // Returns Object {value:5, done:false }
console.log(itr.next())   // Returns Object {value:undefined, done:true }

let obj = {
    start:10, 
    end:15,
    [Symbol.iterator](){ 
        return {
            next(){
                if(obj.start<=obj.end){
                    return {value:obj.start++,done:false}
                } else { 
                    return {done:true}
                }
            }
        }
    }
}
for (let x of obj){ // 
    console.log(x)
} 

//// GENERATORS 
const generatorFunc = function* (){ //Asterisk
    console.log("start");
    yield;  // <== next() method will start the execution until the yield operator
    console.log("middle");
    yield; /// <== yield can return any value;
    console.log("end");
    yield;
}
const genObject = generatorFunc();
console.log(genObject.next()); // <== next() returns 2 keys: 1.)value, 2.) boolean (showing next status)
console.log(genObject.next());
console.log(genObject.next()); 

// Geneartors (these are iterable)
for (let o of genObject){
    console.log(o)
}

////// GRID  ////////////
const gridX = [
    [0,1,0,0,0],
    [0,1,0,0,0],
    [0,0,0,1,0],
    [0,0,1,1,0],
    [1,0,0,1,1],
    [1,1,0,0,0],
]
const exploreGrid =function (grid,r,c,visited)  {
    // BASE CASES 
    const rowInbounds = 0 <= r && r <grid.length;
    const colInbounds = 0 <= c && c <grid[0].length;
    if (!rowInbounds || !colInbounds) { return false}

    if (grid[r][c] ===0) {return false}
    const coord = `${r},${c}`
    if (visited.has(coord)) { return false }
    visited.add(coord);

    // GO
    exploreGrid(grid, r-1,c,visited) // out of bounds first time
    exploreGrid(grid, r+1,c,visited)  //right
    exploreGrid(grid, r,c-1,visited)  //down
    exploreGrid(grid, r,c+1,visited)  // up

    return true // explored
}
    const islandCount = function (grid)  {
const visited = new Set();
let count = 0;

for (let r = 0; r <grid.length;r +=1) {
    for (let c = 0; c < grid[0].length;c +=1) {
        if(exploreGrid(grid, r,c,visited) === true) {
            count+=1
        }
    }
    return count;
}
}
console.log("gridX "+islandCount(gridX))

/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
 var shiftGrid = function(grid, k) {
  
    let newGrid = copyGrid(grid) 
    // console.log("newGrid" ,newGrid);

    // for (let i=0;i<k;i++) {
            
    for (let row = 0;row<grid.length;row++) {
        for(let col = 0;col<grid[0].length-1;col++) { // all but last col
            newGrid[row][col+1] = grid[row][col]
        }
    }
    for (let row = 0;row<grid.length-1;row++) {
        newGrid[row+1][0] = grid[row][grid[0].length-1];
    }
    newGrid[0][0] = grid[grid.length-1][grid[0].length-1]
    console.log("after newGrid",newGrid)
    return newGrid
    // }
}
const copyGrid = (grid) => {
    let twoArray = new Array(grid.length) 
    // console.log(twoArray)
    for (let i = 0;i<twoArray.length;i++) {
        twoArray[i] = new Array(grid[0].length)
    } 
    return twoArray
   };
// console.log(copyGrid(gridX))
 const gridSorted = [
    [99,1,2,3,4],
    [0,1,2,3,4],
    [0,1,2,3,4],
    [0,1,2,3,4],
    [0,1,2,3,4],
    [0,1,2,3,777]
     ]
shiftGrid(gridSorted)

 
/////////////////// MISCELLANEOUS //////////////////////

////// Chaining
let users = [
    { id: 1, name: "a", isActive: true, age: 33 },
    { id: 2, name: "b", isActive: false, age: 43 },
    { id: 3, name: "c", isActive: true, age: 13 },
]
const arr = []

// for (let i=0;i<users.length;i++) { arr.push(users[i].name) }

// users.forEach(user=> { arr.push(user.name) })

const filterMapper = (users) => users.filter(user => user.isActive).map(user => "name: " + user.name);
// console.log(filterMapper(users));

const find = (users) => users.find((user) => user.age >= 21)  // {id:1 ...} first only
//  findIndex();  // like indexOf() but is testing function 
                  // like includes()  ""
                  // like some()        ""

users.sort((user1, user2) => user1.age < user2.age ? -1 : 1) // ASC
// console.log(users)
let arr1a = users.filter(user => user.isActive).map(user => user.name);

users.sort((user1, user2) => user1.age < user2.age ? 1 : -1) // DESC
// console.log(users)
let arr1d = users.filter(user => user.isActive).map(user => user.name);
// console.log(  arr1a+ " desc: "+arr1d)

const filterSorter = (users) => users.sort((user1, user2) => user1.age < user2.age ? 1 : -1).filter(user => user.isActive).map(user => user.name); // ASC
// console.log(filterSorter(users))

/// reduce
const arra = [1, 3, 4, 6]
const total = arra.reduce((acc, curr) => {
    return acc + curr * 2;
}, 10)
console.log(total)

///// RANDOM
 
export function first(array, n = 1) {
  if (n === 1) return array[0]
  return array.filter((_, index) => index < n)
}

export function last(array, n = 1) {
  if (n === 1) return array[array.length - 1]
  return array.filter((_, index) => array.length - index <= n)
} 

export function pluck(array, key) {
  return array.map(element => element[key])
}

export function groupBy(array, key) {
  return array.reduce((group, element) => {
    const keyValue = element[key]
    return { ...group, [keyValue]: [...(group[keyValue] ?? []), element] }
  }, {})
}

////// Object Mapping ////////////
// dynamic object variables
let tV = "pCode1"
let getData = function() { }
let obj1 = {
    [tV]:1000,
    pName1:"apple",
    ['get'+'Data'] () {
        console.log(obj.pCode1, obj.pName1);
    }
}
const obj2 = Object.assign({}, obj1);
// configuring object properties 
const proto = Object.defineProperty({}, 'pCode3', {
    writeable:true, 
    configurable: true, 
    value: 2001
});
const obj3 = Object.create(proto)

////// TypeOf
const typeOf2= (input) => {
    const rawObject = Object.prototype.toString.call(input).toLowerCase();
    const typeOfRegex = /\[object (.*)]/g;
    const type = typeOfRegex.exec(rawObject)[1]
    console.log("type: "+type)
    return type
}

const meanMedianMode = (type) => {
    return {
        mean: getMean(type),
        median: getMedian(type),
        median: getMedianObj(type),
        mode: getMode(type)
    }
}        
        const getMean = (arr) => {
            let sum = 0;
            arr.forEach(a => {
                sum += a;
            })
            let mean = sum / arr.length;
            return mean;
        }
// MEDIANS
        const getMedian = (arr) => {
            arr.sort(function (a, b) { return a - b })
            let median;
            if (arr.length % 2 !== 0) {
                median = arr[Math.floor(arr.length / 2)];
            } else {
                const median1 = arr[arr.length / 2 - 1];
                const median2 = arr[arr.length / 2];
                median = (median1 + median2) / 2
            }
            return median
        }
        console.log(getMedian([1,2,3,4,5]))
        console.log(getMedian([1,2,3,4]))

        const getMedianObj = (objArr) => { 
            objArr.sort(function (a, b) { return a.b- b.b })  // <--hard-coded obj 
            let median;
            let objArrLen = Object.keys(objArr).length;
            if (objArrLen % 2 !== 0) {  // ODD
                median  = objArr[Math.floor(objArrLen / 2)].b;
            } else {
                const median1 = objArr[objArrLen / 2 - 1].b;
                const median2 = objArr[objArrLen / 2].b;
                median = (median1 + median2) / 2 
            }
            return median
        } 
        console.log(getMedianObj([{a:1,b:101},{a:2,b:102},{a:3,b:103}])) 
        console.log(getMedianObj([{a:1,b:101},{a:2,b:102},{a:3,b:103},{a:4,b:104}])) 

        const getMode = (arr) => {
            let modeObj = {}
            // Make Object from array
            arr.forEach(a => {
                if (!modeObj[a]) { modeObj[a] = 0; }
                modeObj[a]++
            })
            // make arry of modes
            let maxFreq = 0;
            let modes = [];
            for (let m in modeObj) {
                if (modeObj[m] > maxFreq) {
                    modes = [m]
                    maxFreq = modeObj[m]   // {0:1} ... {0:1,1:0,2:0}
                } else if (modeObj[m] === maxFreq) {modes.push(m)} // multi-modal
            } 

            if (modes.length === Object.keys(modeObj).length) modes = [] // no modes~!
            return modes
        }
console.log(meanMedianMode([1,1,3,3,4,5]))



/// SHUFFLE
const shuffleItems = (items) => {
    return items.map((item) => ({ sort: Math.random(), value:item})).sort((item1, item2) => item1.sort - item2.sort).map((a) => a.value);
}
console.log(shuffleItems([2,5,3,12,22,1]))