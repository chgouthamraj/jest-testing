const myModule = require("./spy");

//in Jest, spying requires the function to be a method of an object.
//The jest.spyOn(obj, 'method') function works by wrapping an existing 
// method on an object so it can track its calls. If there's no object, there's nothing to wrap

test("should spy on myFunction and check if it was called",()=>{
    const spy = jest.spyOn(myModule,"myFunction")

    //should
    myModule.myFunction()

    expect(spy).toHaveBeenCalled()

    spy.mockRestore()
})