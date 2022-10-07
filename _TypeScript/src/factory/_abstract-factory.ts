
import { FactoryAleph, IProductAleph } from './_abstract-factory-aleph'
import { FactoryBeth, IProductBeth } from './_abstract-factory-beth'

interface IProduct extends IProductAleph, IProductBeth {}

class AbstractFactory {  // Sending back index 2 from either Factory Aleph or factory Beth
    //  MAke Concrete Class using conditional logic >>>>

    static createObject(factory: string): IProduct | undefined {
        try {
            if (['a-x', 'a-y', 'a-z'].indexOf(factory) > -1) {
                return FactoryAleph.getObject(factory[2])
            }
            if (['b-x', 'b-y', 'b-z'].indexOf(factory) > -1) {
                return FactoryBeth.getObject(factory[2])
            }
            throw new Error('No Factory Found') //  new Error(message, [fileName, lineNumber])
        } catch (e) {
            console.log(e)
        }
    }
}


// CLIENT
let PRODUCT = AbstractFactory.createObject('a-z')
console.log(PRODUCT) // 
PRODUCT = AbstractFactory.createObject('a-y')
console.log(PRODUCT) // 
PRODUCT = AbstractFactory.createObject('a-x')
console.log(PRODUCT) // 

PRODUCT = AbstractFactory.createObject('b-x')
console.log(PRODUCT)
PRODUCT = AbstractFactory.createObject('b-y')
console.log(PRODUCT)
PRODUCT = AbstractFactory.createObject('b-z')
console.log(PRODUCT)