const Intern = require("../lib/intern");

describe("Intern", ()=>   {
    describe("Initialization", ()   =>  {
        it("should check to see if there is an instance of a new Intern", () =>  {
            const newIntern = new Intern();

            expect(newIntern instanceof Intern).toEqual(true);
        })
        it("should set Intern name when created", () =>  {
            const name = "Finn";
            const newIntern = new Intern(name);

            expect(newIntern.name).toEqual(name);
        })
        it("should set Intern id when created", () =>  {
            const id = "789";
            const newIntern = new Intern(id);

            expect(newIntern.id).toEqual(id);
        })
        it("should set Intern email when created", () =>  {
            const email = "finn@gmail.com";
            const newIntern = new Intern(email);

            expect(newIntern.email).toEqual(email);
        })
    })
});

describe("school", () =>  {
    it("should return the school of the Intern", ()    =>  {
        const school = "UGA";
        const newIntern = new Intern(school);

        expect(newIntern.school).toEqual(school);
    })
})

describe("getTitle", () =>  {
    it("should return the title of the Intern", ()    =>  {
        const title = "Intern";
        const newIntern= new Intern(title);

        expect(newIntern.title).toEqual(title);
    })
})