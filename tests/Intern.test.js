const Engineer = require("../lib/engineer");

describe("Engineer", ()=>   {
    describe("Initialization", ()   =>  {
        it("should check to see if there is an instance of a new Employee", () =>  {
            const newEngineer = new Engineer();

            expect(newEngineer instanceof Engineer).toEqual(true);
        })
        it("should set engineer name when created", () =>  {
            const name = "Wendy";
            const newEngineer = new Engineer(name);

            expect(newEngineer.name).toEqual(name);
        })
        it("should set Engineer id when created", () =>  {
            const id = "123";
            const newEngineer = new Engineer(id);

            expect(newEngineer.id).toEqual(id);
        })
        it("should set Engineer email when created", () =>  {
            const email = "wendy@gmail.com";
            const newEngineer = new Engineer(email);

            expect(newEngineer.email).toEqual(email);
        })
    })
});

describe("getName", ()  =>  {
    it("should return the name of the Engineer", () =>  {
        const name = "Wendy";
        const newEngineer = new Engineer(name);

        expect(newEngineer.name).toEqual(name);
    })
})

describe("getId", ()    =>  {
    it("should return the id of the Engineer", ()   =>  {
        const id = "123";
        const newEngineer = new Engineer(id);

        expect(newEngineer.id).toEqual(id);
    })
})

describe("getEmail", () =>  {
    it("should return the email of the Engineer", ()    =>  {
        const email = "wendy@gmail.com";
        const newEngineer = new Engineer(email);

        expect(newEngineer.email).toEqual(email);
    })
})

describe("getGithub", () =>  {
    it("should return the github account of the Engineer", ()    =>  {
        const github = "wendywilgus";
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