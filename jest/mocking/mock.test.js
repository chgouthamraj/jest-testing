//mocking

//When you call jest.mock('./mathUtils'), Jest automatically replaces all exported functions from mathUtils 
// with mock functions (jest.fn()), including subtract
jest.mock('./mathUtils')

const { calculate } = require('./app');
const { add, subtract, multiply, divide } = require('./mathUtils');



describe('calculate',()=>{
    test('calls add funtion with parameter',()=>{
        calculate(1,2,"add");
        // toHaveBeencalled (expect to  called add funcion)
        expect(add).toHaveBeenCalled()
        // toHaveBeencalledWith (expect to  called add funcion with parameters)
        expect(add).toHaveBeenCalledWith(1,2)

        calculate(1,2,"subtract");
        expect(subtract).toHaveBeenCalled()
    })
})
