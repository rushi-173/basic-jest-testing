const add = require("./add");

test("Should return sum of two numbers.", () => {
    let res = add(1,2);
    expect(res).toBe(3);
});