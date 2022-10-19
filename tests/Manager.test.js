const Manager = require("../lib/manager");

test("managername", () =>    {
    const testManager = new Manager("Wendy", "123", "wendy@gmail.com", "1");
    expect(testManager.getName()).toEqual("Wendy");
})

test("managerid", () =>    {
    const testManager = new Manager("Wendy", "123", "wendy@gmail.com", "1");
    expect(testManager.getId()).toEqual("123");
})

 test("manageremail", () =>    {
    const testManager = new Manager("Wendy", "123", "wendy@gmail.com", "1");
    expect(testManager.getEmail()).toEqual("wendy@gmail.com");
}) 

test("managerofficenumber", () =>    {
    const testManager = new Manager("Wendy", "123", "wendy@gmail.com", "1");
    expect(testManager.getOfficeNumber()).toEqual("1");
}) 