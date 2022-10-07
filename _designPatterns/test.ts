"use strict"
// TYPESCRIPT
let aTuple: [number, string]
let aSet: Set<number> 
let anObject: { [key:number]:string} 
let aNumber: number
let aBoolean: boolean
let aString: string = 'let\s go'
let anArray: number[] = [1,2,3] 

aTuple = [1,'a']
aSet = new Set([1,2,3])
console.log(Array.from(aSet)[2])
anObject = { 1:'a'}

aNumber = 123// decimal
aNumber = 123.456 //float
aNumber = 0xffff // hex
aNumber = 0b10101 // binary
aNumber = 0o671 // octal
aBoolean = aString.endsWith('o') 
 
function foo(bar: string) {
	return "hello"+bar;
}
let bazz = "z!!!"
console.log(foo(bazz)); 

interface IFoo {
	name:string
	id:number
}
abstract class aFoo {
	constructor(){}
	abstract dream:string  
}
class Foo implements IFoo {
	name:string
	id:number
	stepsWalked:number = 1
	constructor(name:string, id:number) {
		this.name = name
		this.id = id
	}
	
	walk(steps: number): void {
		console.log('Foo "'+this.name+'" walks '+steps)
		this.stepsWalked += steps
	}
	totalSteps():number{
		console.log(this.stepsWalked)
	return this.stepsWalked 
	}
}
const foofoo = new Foo('themos', 12)
console.log(foofoo.totalSteps())