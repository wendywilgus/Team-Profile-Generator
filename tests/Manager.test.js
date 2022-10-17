const Manager = require("../lib/manager");

describe("Manager", ()=>   {
    describe("Initialization", ()   =>  {
        it("should check to see if there is an instance of a new Manager", () =>  {
            const newManager = new Manager();

            expect(newManager instanceof Manager).toEqual(true);
        })
        it("should set Manager name when created", () =>  {
            const name = "Wendy";
            const newManager = new Manager(name);

            expect(newManager.name).toEqual(name);
        })
        it("should set Manager id when created", () =>  {
            const id = "123";
            const newManager = new Manager(id);

            expect(newManager.id).toEqual(id);
        })
        it("should set Manager email when created", () =>  {
            const email = "wendy@gmail.com";
            const newManager = new Manager(email);

            expect(newManager.email).toEqual(email);
        })
    })
});

describe("officeNumber", () =>  {
    it("should return the office number of the Manager", ()    =>  {
        const officeNumber = "1";
        const newManager = new Manager(officeNumber);

        expect(newManager.officeNumber).toEqual(officeNumber);
    })
})

describe("getTitle", () =>  {
    it("should return the title of the Manager", ()    =>  {
        const title = "Manager";
        const newManager= new Manager(title);

        expect(newManager.title).toEqual(title);
    })
})