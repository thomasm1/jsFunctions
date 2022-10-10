const { describe, it } = require("jasmine");
 

describe('population database', function() {
    it('is a singlteon', function() {
        const db1 = new LocalDB();
        const db2 = new LocalDB();
        expect(db1).toBe(db2);
    });
})