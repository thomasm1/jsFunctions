export interface IProductBeth {
    name: string
}

class ConcreteProduct implements IProductBeth {   /// middleman concrete using conditionals
    name = ''
}

class ConcreteProductXX extends ConcreteProduct {
    constructor() {
        super() //<<<<<<<<<<<<<<<<<<<<<<--dont forget super
        this.name = 'FactoryBeth:  ConcreteProductXX'
    }
}

class ConcreteProductYY extends ConcreteProduct {
    constructor() {
        super()
        this.name = 'FactoryBeth: ConcreteProductYY'
    }
}

class ConcreteProductZZ extends ConcreteProduct {
    constructor() {
        super()
        this.name = 'FactoryBeth: ConcreteProductZZ'
    }
}

export class FactoryBeth {
    static getObject(some_property: string): IProductBeth {
        try {
            if (some_property === 'x') {
                return new ConcreteProductXX()
            } else if (some_property === 'y') {
                return new ConcreteProductYY()
            } else if (some_property === 'z') {
                return new ConcreteProductZZ()
            } else {
                throw new Error('Class Not Found')
            }
        } catch (e) {
            console.log(e)
        }
        return new ConcreteProduct()
    }
}
 