"use strict"
interface IProduct {
    name:string
}

class ConcreteProduct implements IProduct {
    name = ''
}
class ConcreteProductA extends ConcreteProduct {
    constructor() {
        super()
        this.name = 'Concrete A Product'
    }
}
class ConcreteProductB extends ConcreteProduct {
    constructor() {
        super()
        this.name = 'Concrete B Product'
    }
}
class ConcreteProductC extends ConcreteProduct {
    constructor() {
        super()
        this.name = 'Concrete C Product'
    }
}

class Creator {
    static createObject(propertyRequest: string): IProduct  {
        if (propertyRequest === 'a') {
            return new ConcreteProductA()
        } else if(propertyRequest === 'b'){
            return new ConcreteProductB()
        } else if (propertyRequest === 'c') {
            return new ConcreteProductC()
        }
    }
}

const product = Creator.createObject('b')
console.log(product.name)