const Employee = require("../lib/employee");

describe("Employee", ()=>   {
    describe("Initialization", ()   =>  {
        it("should check to see if there is an instance of a new Employee", () =>  {
            const newEmployee = new Employee();

            expect(newEmployee instanceof Employee).toEqual(true);
        })
        it("should set employee name when created", () =>  {
            const name = "Wendy";
            const newEmployee = new Employee(name);

            expect(newEmployee.name).toEqual(name);
        })
        it("should set employee id when created", () =>  {
            const id = "123";
            const newEmployee = new Employee(id);

            expect(newEmployee.id).toEqual(id);
        })
        it("should set employee email when created", () =>  {
            const email = "wendy@gmail.com";
            const newEmployee = new Employee(email);

            expect(newEmployee.email).toEqual(email);
        })
    })
});

describe("getName", ()  =>  {
    it("should return the name of the Employee", () =>  {
        const name = "Wendy";
        const newEmployee = new Employee(name);

        expect(newEmployee.name).toEqual(name);
    })
})

describe("getId", ()    =>  {
    it("should return the id of the Employee", ()   =>  {
        const id = "123";
        const newEmployee = new Employee(id);

        expect(newEmployee.id).toEqual(id);
    })
})

describe("getEmail", () =>  {
    it("should return the email of the employee", ()    =>  {
        const email = "wendy@gmail.com";
        const newEmployee = new Employee(email);

        expect(newEmployee.email).toEqual(email);
    })
})

describe("getTitle", () =>  {
    it("should return the title of the employee", ()    =>  {
        const title = "Manager";
        const newEmployee = new Employee(title);

        expect(newEmployee.title).toEqual(title);
    })
})