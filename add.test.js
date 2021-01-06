const add = require("./add");

test("Should return sum of two numbers.", () => {
    let res = add(1,2);
    expect(res).toBe(3);
    res = add(3,10);
    expect(res).toBe(13);
});

test("Should return 0",()=>{
    expect(add(0,0)).toBe(0);
});

test("Should be null", ()=>{
    expect(add().toBeNull)
});