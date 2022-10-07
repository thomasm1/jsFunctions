import IglooDirector from './igloo-director'
import CastleDirector from './castle-director'
import HouseBoatDirector from './houseboat-director'

const igloo = IglooDirector.construct()
const castle = CastleDirector.construct()
const houseboat = HouseBoatDirector.construct()
 
console.log(igloo.construction())
console.log(castle.construction())
console.log(houseboat.construction())