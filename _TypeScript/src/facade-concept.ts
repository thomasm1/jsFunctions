class SubSystemClassA {
    // complicated - needing Facade
    method(): string {
        return 'A'
    }
}
class SubSystemClassB {
    // complicated - needing Facade
    method(value: string): string {
        return value
    }
}
class SubSystemClassC {
    // complicated - needing Facade
    method(value: { C: number[] }): {C: number[] } {
        return value
    }
}

class Facade {
    // simplified facade showing subsystem services
    subSystemClassA(): string {
        return new SubSystemClassA().method()
    }
    subSystemClassB(value: string): string {
        return new SubSystemClassB().method(value)
    }
    subSystemClassC(value: { C: number[] }): {C: number[] } {
        return new SubSystemClassC().method(value)
    }
}

// CLIENT
// Calling potentially complicated subsystems directly
console.log(new SubSystemClassA().method())
console.log(new SubSystemClassB().method('B'))
console.log(new SubSystemClassC().method({ C: [1,2,3] }))

// or using simplified facade INSTEAD
const FACADE = new Facade()
console.log(FACADE.subSystemClassA())
console.log(FACADE.subSystemClassB('B'))
console.log(FACADE.subSystemClassC({ C: [1,2,3] }))