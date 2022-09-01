

const reverseInplace = function (string) {
    // let arr = string.split(""); // [w,a,t,c,h]
    let arr = [...string] //  [w,a,t,c,h]
    for (let i = 0; i < arr.length / 2; i++) {   // divide len by 2!!!
        let temp = arr[i]  //s,t,r,
        arr[i] = arr[arr.length - 1 - i]  //  temp lose first
        arr[arr.length - 1 - i] = temp; // rebuild from back
    }
    let reverse = arr.join("")
    console.log(reverse)
    return reverse
}
// reverseInplace("watch")

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
/// Fibonacci Memo
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

/// Closure
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

/// Currying  
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

/// Binary Search
let arrSorted =[1,2,3,4,5,6,7,8]
const binarySearch = (arr, num) => {
    let midIndex = Math.floor(arr.length/2); 
    if (num ===arr[midIndex]) return true;
    if (num < arr[midIndex] && arr.length>1) {
        return binarySearch(arr.splice(0,midIndex), num)
    } 
    else if (num > arr[midIndex] && arr.length>1) {
        return binarySearch(arr.splice(midIndex,arr.length), num)
    }
    else return false
}
// console.log("binarySearch: "+binarySearch(arrSorted,1))

/// BubbleSort
let arrUnsorted =[1,5,8,2,3,4,6,7]
const bubbleSort = (arr, num) => {

    for(let i=arr.length;i>0;i--){
        for(let j = 0;j<i;j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}
// console.log(arrUnsorted+"...>> "+bubbleSort(arrUnsorted))

/// GRID
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
/////////////////// MISC //////////////////////

/// Chaining
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


/// Object Mapping
const meanMedianMode = (arr) => {
    return {
        mean: getMean(arr),
        median: getMedian(arr),
        mode: getMode(arr)
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
        const getMedian = (arr) => {
            arr.sort(function (a, b) { return a - b })
            let median;
            if (arr.length % 2 !== 0) {
                median = Math.floor(arr.length / 2);
            } else {
                const mid1 = arr.length / 2 - 1;
                const mid2 = arr.length / 2;
                median = mid1 + mid2 / 2
            }
            return median
        }
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
