interface IComponent {
    method(): string
}
class Component implements IComponent {

    method():string {
        return 'Component Method'
        }
}

class Decorator implements IComponent {
    private object: IComponent

    constructor(object:IComponent){
        this.object = object
    }
    method(): string {
        return `Decorator Methd(${this.object.method()})`
    }
}

//////// CLIENT
const myComponent = new Component()
console.log(myComponent.method())

// component decorated
const mydecorated = new Decorator(myComponent)
console.log(mydecorated.method())

// decorated component ... decorated again
const mydecoratedAgain = new Decorator(mydecorated)
console.log(mydecoratedAgain.method())