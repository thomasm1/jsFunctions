import { IValue } from './value'

class _Subtract implements IValue {
    value: number
    constructor(valu1: IValue | number, valu2: IValue | number) {
        const left = Object.prototype.hasOwnProperty.call(valu1,'value')
        ? (valu1 as IValue).value  // calling Object, would have value
        : (valu1 as number)
        const right = Object.prototype.hasOwnProperty.call(valu2,'value')
        ? (valu2 as IValue).value  // calling Object, would have value
        : (valu2 as number)
    this.value = left - right
    }
}
export default function Subtract(
    valu1: IValue | number,
    valu2: IValue | number
): IValue {
    return new _Subtract(valu1,valu2)
}