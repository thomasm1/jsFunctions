// 0. mouseEvents
const doubleClick = Rx.Observable.fromEvent(document, 'dblclick')
doubleClick.subscribe(dblclick => console.log(dblclick))

const clicks = Rx.Observable.fromEvent(document, 'click')
clicks.subscribe(click => printMouse('X: ' + JSON.stringify(click.clientX) + ' | ' + 'Y: ' + JSON.stringify(click.clientY)))

// 1. Syntax
const observable = Rx.Observable.create(observer => {
    observer.next('this is ...')
    observer.next('...your data STREAM!\n\n')
})
observable.subscribe(val => print1('1. ' + val))

// 2. Promise to Observable
const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("2. ...PROMISE resolved\n\n");
    }, 0);
});
const observaPromesa = Rx.Observable.fromPromise(promesa);
observaPromesa.subscribe(result => print1(result));

// 3. Timer
const timer = Rx.Observable.timer(0)
timer.subscribe(done => print1('3. TIMER ding!\n\n'))

// 4. Miscellaneous Observables
const mashUp = Rx.Observable.of('string', ['array'], 12) //, true, { property: 'value' })
mashUp.subscribe(val => print1('4. Misc ' + val + '\n\n'))

// 5. Cold Observable (value is build inside the observable...)
const coldOne = Rx.Observable.create(observer => {
    observer.next(Math.random())
});
coldOne.subscribe(a => print1(`5. Cold Subscribe_A: ${a}`))
coldOne.subscribe(b => print1(`5. Cold Subscribe_B: ${b}\n\n`))

// 6. Hot Observable (value build outside of observable, so same for subscribers)
const x = Math.random();
const hotOne = Rx.Observable.create(observer => {
    observer.next(x)
});
hotOne.subscribe(a => print1(`6a. Hot Subscribe_A: ${a}`))
hotOne.subscribe(b => print1(`6a. Hot Subscribe_B: ${b}\n\n`))
    // OR //
const cold = Rx.Observable.create(observer => {
    observer.next(Math.random())
});
const hot = cold.publish()
hot.subscribe(a => print1(`6b. Hot Subscribe_A: ${a}`))
hot.subscribe(b => print1(`6b. Hot Subscribe_B: ${b}\n\n`))
hot.connect()

// 7. Completion
const timerComplete = Rx.Observable.timer(0);
timer
    .finally(() => print2('7. Timer .FINALLY completed!\n\n'))
    .subscribe()

// 8. Interval
const interval = Rx.Observable.interval(200)
    // interval.subscribe(int => print1(new Date().getSeconds())) 
    .finally(int => print2('8a. Interval ' + new Date() + '\n\n'))

// Interval manually unsubscribed 
const unSubscribe = interval.subscribe(x => print2('8b.unsubscribe() ' + x))
setTimeout(() => {
    unSubscribe.unsubscribe()
}, 500)

// 9.  MAP
const nums = Rx.Observable.of(10, 1000);
nums.map(num => Math.log(num))
    .finally(() => print1('\n\n'))
    .subscribe(n => print1('9 MAP:  ' + n))

const jsonString = '{ "type": "Dog", "breed": "pug" }';
const apiCall = Rx.Observable.of(jsonString);
apiCall.map(json => JSON.parse(json))
    .subscribe(obj => {
        print1('9b. MAP: ' + obj.type)
        print1('9b: MAP' + obj.breed + '\n\n')
    })

// 10. DO
const names = Rx.Observable.of('Thomas', 'milton')
names
    .do(name => print1(name))
    .map(name => name.toUpperCase())
    .do(name => print1('10. DO: ' + name + '\n\n'))
    .subscribe()

// 11.  FILTER
const numFilters = Rx.Observable.of(-2, 3, 33, 34, -3);
numFilters.filter(n => n <= 0)
    .finally(() => print2('\n\n'))
    .subscribe(n => print2('11. FILTER: ' + n))

// 12. first()
const numFirst = Rx.Observable.of(-2, 3, 33, 34, -3)
    .first()
    .subscribe(n => print2('12. first: ' + n + '\n\n'))


// 13. throttle()
let mouseEvents = Rx.Observable.fromEvent(document, 'mousemove')
    //mouseEvents
    //    .subscribe(e => print2(e.type));
    // mouseEvents
    //     .throttleTime(1000) // GIVES FIRST VALUE, WAITS 1000
    //     .subscribe(e => print2('13. THROTTLE: ' + e.type));
mouseEvents
    .debounceTime(1000) // WAITS 1000, THEN GIVES LAST VALUE
    .subscribe(e => print2('13. DEBOUNCE: ' + e.type + '\n\n'));

//. 14 scan()  JUST LIKE ARRAY REDUCE
let cliicks = Rx.Observable.fromEvent(document, 'click')
cliicks
    .map(e => parseInt(Math.random() * 10))
    .do(score => printMouse(`14. SCAN -- Click scored = ${score}`))
    .scan((highScore, score) => highScore + score)
    .subscribe(highScore => printMouse(`14. SCAN High Score ${highScore}` + '\n\n'))

//. 15. switchMap()2
let clicksSwitch = Rx.Observable.fromEvent(document, 'click');
const stopSwitchMap = Rx.Observable.timer(2000)
clicksSwitch.switchMap(click => {
        return Rx.Observable.interval(500)
    })
    .takeUntil(stopSwitchMap)
    .finally(() => print2('--15.SWITCHMAP finally'))
    .subscribe(i => print2('--15 SWITCHMAP ' + i + '\n\n'))

// 16. takeUntil
const interv = Rx.Observable.interval(500)
const notify = Rx.Observable.timer(2000)
interv
    .takeUntil(notify)
    .finally(() => print2('--16. finally'))
    .subscribe(i => print2('--16 TAKEUNTIL: ' + i + '\n\n'))




/////////////////////////////////
// left colum
function print1(val) {
    let el = document.createElement('p')
    el.innerText = val;
    document.getElementById("analytics").appendChild(el)
}

// right column
function print2(val) {
    let el = document.createElement('p')
    el.innerText = val;
    document.getElementById("analytics2").appendChild(el)
}

// right column
function printMouse(val) {
    let el = document.createElement('p')
    el.innerText = val;
    document.getElementById("mouse").appendChild(el)
}