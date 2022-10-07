import ChairFactory from './chair-factory'

const myChair = ChairFactory.getChair('ChairBig')
console.log(myChair.getDimensions())

const mySmallChair = ChairFactory.getChair('ChairSmall')
console.log(mySmallChair.getDimensions())