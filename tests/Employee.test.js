const Employee = require("../lib/employee");

    test("employeename", () =>    {
        const testEmployee = new Employee("Wendy", "123", "wendy@gmail.com", "1");
        expect(testEmployee.getName()).toEqual("Wendy");
    })
    
    test("employeeid", () =>    {
        const testEmployee = new Employee("Wendy", "123", "wendy@gmail.com", "1");
        expect(testEmployee.getId()).toEqual("123");
    })
    
        test("employeeemail", () =>    {
        const testEmployee = new Employee("Wendy", "123", "wendy@gmail.com", "1");
        expect(testEmployee.getEmail()).toEqual("wendy@gmail.com");
    }) 
    
    test("employeetitle", () =>    {
        const testEmployee = new Employee("Wendy", "123", "wendy@gmail.com", "employee");
        expect(testEmployee.getTitle()).toEqual("Employee");
    }) 