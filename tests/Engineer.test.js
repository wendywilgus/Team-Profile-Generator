const Engineer = require("../lib/engineer");

describe("Engineer", ()=>   {
    describe("Initialization", ()   =>  {
        it("should check to see if there is an instance of a new Employee", () =>  {
            const newEngineer = new Engineer();

            expect(newEngineer instanceof Engineer).toEqual(true);
        })
        it("should set engineer name when created", () =>  {
            const name = "Brian";
            const newEngineer = new Engineer(name);

            expect(newEngineer.name).toEqual(name);
        })
        it("should set Engineer id when created", () =>  {
            const id = "456";
            const newEngineer = new Engineer(id);

            expect(newEngineer.id).toEqual(id);
        })
        it("should set Engineer email when created", () =>  {
            const email = "brian@gmail.com";
            const newEngineer = new Engineer(email);

            expect(newEngineer.email).toEqual(email);
        })
    })
});

describe("getGithub", () =>  {
    it("should return the github account of the Engineer", ()    =>  {
        const github = "brianwilgus";
        const newEngineer = new Engineer(github);

        expect(newEngineer.github).toEqual(github);
    })
})

describe("getTitle", () =>  {
    it("should return the title of the Engineer", ()    =>  {
        const title = "Engineer";
        const newEngineer = new Engineer(title);

        expect(newEngineer.title).toEqual(title);
    })
})