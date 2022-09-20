
import {IDataModel } from './data-model'

export interface IDataController { // Data Controller
// Subject interface
subscribe(observer: IDataModel): void
unsubscribe(observer: IDataModel): void
notify(data: number[]): void
}

export class DataController implements IDataController {
        // A Subject -> Observable
        static instance: DataController
        private observers: Set<IDataModel> = new Set()

        constructor() {
            if (DataController.instance) {
                return DataController.instance
            }
            DataController.instance = this
        }
        
        subscribe(observer: IDataModel): void {
            this.observers.add(observer)
        }
        unsubscribe(observer: IDataModel): void {
            this.observers.delete(observer)
        }
        notify(data: number[]): void {
            this.observers.forEach((observer) => {
                observer.notify(data)
            })
        }
}