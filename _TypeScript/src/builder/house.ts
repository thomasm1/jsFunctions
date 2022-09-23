export default class House {
    doors = 0
    windows = 0
    wallMaterial = ''
    buildingType = ''

    construction():string {
        return `Material ${this.wallMaterial} ${this.buildingType} with ${this.doors} door[s] ${this.windows} windoes`
    }
}