import House from './house'
import HouseBuilder from './house-builder'

export default class HouseBoatDirector {
    static construct(): House {
        return new HouseBuilder()
            .setBuildingType('house built')
            .setWallMaterial('Wood')
            .setNumberDoors(6)
            .setNumberWindows(8)
            .getResult()
    }
}