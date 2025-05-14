const multiply = require('./index')

// // Test suite 
test("Test multiply function",async ()=>{
 expect(multiply(2,5)).toBe(10); // exact equality
})

// test("2 and 5 not equal to 9",async ()=>{
//     expect(multiply(2,5)).not.toBe(9); // exact equality
// })