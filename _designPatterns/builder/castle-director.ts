import House from './house'
import HouseBuilder from './house-builder'

export default class CastleDirector {
    static construct(): House {
        return new HouseBuilder()
        .setBuildingType('Castle')
        .setWallMaterial('Rock/Sandstone')
        .setNumberDoors(100)
        .setNumberWindows(800)
        .getResult()
    }
}