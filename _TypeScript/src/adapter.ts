
interface IAleph {
    methodAleph(): void
}

class ClassAleph implements IAleph {
    methodAleph() {
        console.log('method A')
    }
}

interface IBeth{
    methodBeth(): void
}

class ClassBeth implements IBeth {
    methodBeth() {
        console.log('method B')
    }
}

class ClassBethAdapter implements IAleph {
    // ClassBet does not have a methodA, so adapter using IA

    private classBeth: ClassBeth

    constructor() {
        this.classBeth = new ClassBeth()
    }

    methodAleph() {
        'calls the class b method_b instead'
        this.classBeth.methodBeth()
    }
}



// CLIENT /////////////////////////////////
// Before the adapter I need to test the objects class to 
// know which method to call.
const ITEMS = [new ClassAleph(), new ClassBeth()]
ITEMS.forEach((item) => {
    if (item instanceof ClassBeth) {
        item.methodBeth()
    } else {
        item.methodAleph()
    }
})

// After creating an adapter for ClassB I can reuse the same method
// signature as ClassA (preferred)
const ADAPTED = [new ClassAleph(), new ClassBethAdapter()]
ADAPTED.forEach((item) => {
    item.methodAleph()
})