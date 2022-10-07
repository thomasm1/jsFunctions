export interface IProductAleph {
    name: string
}

class ConcreteProduct implements IProductAleph {   /// middleman concrete using conditionals
    name = ''
}

class ConcreteProductAA extends ConcreteProduct {
    constructor() {
        super() //<<<<<<<<<<<<<<<<<<<<<<--dont forget super
        this.name = 'FactoryAleph: ConcreteProduct-X'
    }
}

class ConcreteProductBB extends ConcreteProduct {
    constructor() {
        super()
        this.name = 'FactoryAleph: ConcreteProduct-Y'
    }
}

class ConcreteProductCC extends ConcreteProduct {
    constructor() {
        super()
        this.name = 'FactoryAleph: ConcreteProduct-Z'
    }
}

export class FactoryAleph {
    static getObject(some_property: string): IProductAleph {
        try {
            if (some_property === 'x') {
                return new ConcreteProductAA()
            } else if (some_property === 'y') {
                return new ConcreteProductBB()
            } else if (some_property === 'z') {
                return new ConcreteProductCC()
            } else {
                 throw new Error('Class Not Found')
            }
        } catch (e) {
            console.log(e)
        }
        return new ConcreteProduct()
    }
}
 