

     export const reverseInplace =  function (string) {
        let arr = string.split(""); // [s,t,r]
        for (let i=0;i<arr.length/2;i++) {   
            let rtemp1 = arr[i]  //s,t,r,
            arr[i] = arr[arr.length-1-i]  //  temp lose first
            arr[arr.length-1-i] = rtemp1; // rebuild from back
        }
        let reverse = arr.join("")
        console.log(reverse)
        return reverse
    }

                  
    const  StackObject = function () {
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
