const Engineer = require("../lib/engineer");

test("engineernname", () =>    {
    const testEngineer = new Engineer("Brian", "456", "brian@gmail.com", "brianwilgus");
    expect(testEngineer.getName()).toEqual("Brian");
})

test("engineerid", () =>    {
    const testEngineer = new Engineer("Brian", "456", "brian@gmail.com", "brianwilgus");
    expect(testEngineer.getId()).toEqual("456");
})

 test("engineeremail", () =>    {
    const testEngineer = new Engineer("Brian", "456", "brian@gmail.com", "brianwilgus");
    expect(testEngineer.getEmail()).toEqual("brian@gmail.com");
}) 

test("engineergithub", () =>    {
    const testEngineer = new Engineer("Brian", "456", "brian@gmail.com", "brianwilgus");
    expect(testEngineer.getGithub()).toEqual("brianwilgus");
}) 