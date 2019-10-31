// FUNCTION SIGNATURE BEGINS, THIS FUNCTION IS REQUIRED 

function dayCompare(weeklyNet, days)
let dayCount = days;    //initiate new array
let weekArray = weeklyNet;


function beginWeek(weekArray, dayCount) {

    weekArray.unshift(0); // set left, 
    weekArray.push(0);   // set right 
    lastDay = weekArray.length - 2
    console.log(weekArray);
    console.log(lastDay);

    // start for-loop starting with first, ending last 
    for (j = 1; j <= lastDay; j++) {
        // begin loop checking neighbors, then go through 
        // not ideal if nested loop resulting in bigO squared, but will fix if can....
        let left = j - 1;
        let right = j + i;
        if (weekArray[left] === weekArray[right]) {
            weekArray[j] = 0
        } else {
            weekArray[j] = 1
        }
    }
    weekArray.shift(); // returns array to original size 8.
    weekArray.pop();

    dayCount++; // 1st day's work done, now return next day's state
 
    return weekArray, dayCount;
 
}
for (i = dayCount; i <= days; i++) {
    beginWeek(weekArray, dayCount);
}
console.log(weekArray, days);

return weekArray;
}
dayCompare([1, 0, 0, 0, 0, 1, 0, 0], 1)
// FUNCTION SIGNATURE ENDS