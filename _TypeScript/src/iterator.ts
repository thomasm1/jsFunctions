
interface IIterator {
    next(): IAggregate // -> return object in collection
    hasNext(): boolean
}

class IteratorConcept implements IIterator{
    index: number
    aggregates: IAggregate[]

constructor(aggregates: IAggregate[]) {
    this.index = 0
    this.aggregates = aggregates
}
next() {
    if (this.index < this.aggregates.length) {
        const aggregates = this.aggregates[this.index]
        this.index += 1
        return aggregates
    }
    throw new Error('At End of Iterator')
}
hasNext() {
    return this.index < this.aggregates.length
}
}

interface IAggregate {  // An inteface that the aggregates implement
    method(): void
}
class Aggregate implements IAggregate {
    // A concrete object
    method(): void {
        console.log('This method has been invoked')
    }
}

const AGGREGATES = [ // iterable
    new Aggregate(),
    new Aggregate(),
    new Aggregate(),
    new Aggregate(),
]

const ITERABLE  = new IteratorConcept(AGGREGATES)

while (ITERABLE.hasNext()) {
    ITERABLE.next().method()
}
