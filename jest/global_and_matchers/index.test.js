const multiply = require('./index')

// Test suite

describe("Multiply test cases", () => {

    it("Test multiply function", async () => {
        expect(multiply(2, 5)).toBe(10); // exact equality
    })

    it("2 and 5 not equal to 9", async () => {
        expect(multiply(2, 5)).not.toBe(9); // exact equality
    })

})


// test("Test multiply function",async ()=>{
//  expect(multiply(2,5)).toBe(10); // exact equality
// })


//different types of matches 

test("to test object equality",()=>{
    const data ={alpha:'A'}
    data['beta']='B'
    expect(data).toEqual({
        alpha:'A',
        beta:'B'
    }) //deep quality (equal with referenced value)
})


test("Null value checks",()=>{
    const value = null;
    expect(value).toBeNull()
    expect(value).toBeDefined()
    expect(value).not.toBeUndefined()
    expect(value).not.toBeTruthy()
    expect(value).toBeFalsy()
})


test("Zero value checks",()=>{
    const value = 0;
    expect(value).not.toBeNull()
    expect(value).toBeDefined()
    expect(value).not.toBeUndefined()
    expect(value).not.toBeTruthy()
    expect(value).toBeFalsy()
})

//comparison
test("number comparison",()=>{
    const value = 3+3;
    expect(value).toBeGreaterThan(5)//>
    expect(value).toBeGreaterThanOrEqual(5)//>=
    expect(value).toBeLessThan(7)//<
    expect(value).toBeLessThanOrEqual(6)//<=
    expect(value).toBe(6)
    expect(value).toEqual(6)

    const floatValue = 0.2 + 0.1;
    expect(floatValue).toBeCloseTo(0.3,2)

    expect("developer").not.toMatch(/I/)
    expect("developer").toMatch(/dev/)
})


//array matchers 
test("Match arrays",()=>{
    const todoList = [
        "buy groceries",
        "clean room",
        "pay bills",
        "call mom",
        "finish project",
      ];
      expect(todoList).toContain('pay bills')

  //exception matchers
  function openValidFile(){
    throw new Error('file not found') 
  }
  
  expect(()=>openValidFile()).toThrow()
  expect(()=>openValidFile()).toThrow(Error)
  expect(()=>openValidFile()).toThrow('file not found')
  expect(()=>openValidFile()).toThrow(/not found/)
})


//to mock a function (assume a function)
test('drinks returns',()=>{
    const drink=jest.fn(()=>true)
    drink()
    expect(drink).toHaveReturned();
    expect(drink).toHaveReturnedWith(true);
})




