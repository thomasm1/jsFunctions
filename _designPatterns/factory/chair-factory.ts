import ChairSmall from './chairsmall'
import ChairBig from './chairbig'
import IChair from './chair'

export default class ChairFactory {
    static getChair(chair:string): IChair {
        if(chair == 'ChairBig') {
            return new ChairBig()
        } else if(chair == 'ChairSmall') {
            return new ChairSmall()
        }  
    }
}
