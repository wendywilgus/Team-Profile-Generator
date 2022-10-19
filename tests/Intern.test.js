const { createTestScheduler } = require("@jest/core");
const Intern = require("../lib/intern");

test("internname", () =>    {
    const testIntern = new Intern("Finn", "789", "finn@gmail.com", "UGA");
    expect(testIntern.getName()).toEqual("Finn");
})

test("internid", () =>    {
    const testIntern = new Intern("Finn", "789", "finn@gmail.com", "UGA");
    expect(testIntern.getId()).toEqual("789");
})

 test("internemail", () =>    {
    const testIntern = new Intern("Finn", "789", "finn@gmail.com", "UGA");
    expect(testIntern.getEmail()).toEqual("finn@gmail.com");
}) 

test("internschool", () =>    {
    const testIntern = new Intern("Finn", "789", "finn@gmail.com", "UGA");
    expect(testIntern.getSchool()).toEqual("UGA");
}) 
