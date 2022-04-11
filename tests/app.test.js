
const funcs = require("../app")
// ##### SLIDE 53 TESTx #####
describe('slide 53 challenges', ()=>{
    test('To make sure what is returned is not ‘null’', ()=> {
        expect(funcs.notNull()).not.toEqual(null);
    })
    test('To make sure what is returned is not truthy', ()=> {
        expect(funcs.notTruthy()).not.toEqual(true);
    })
    test('To make sure what is returned is not falsy', ()=> {
        expect(funcs.notFalsy()).toEqual(true);
    })
    test('Objects properties are equal to your test', ()=> {
        expect(funcs.obj2Properties().prop1).toEqual("test1")
        expect(funcs.obj2Properties().prop1).toEqual("test1");
    })
    test('To make sure what is returned is not falsy', ()=> {
        expect(funcs.array6Items().length).toBeGreaterThanOrEqual(6);
    })
})

// ##### SLIDE 54 TESTS #####
describe('slide 54 challenges', ()=>{
    test('Convert a number to a string',()=> {
        expect(funcs.numToString(13579)).toEqual("13579")
    })
    test('Display the correct planet with the number order it is away from the sun',()=> {
        expect(funcs.planet(3)).toEqual("Earth")
    })
    test('With an array or boolean values, count how many students are present ',()=> {
        const arrayRegister = [true, true, true, false, true, true, true, true, false, true]
        expect(funcs.registerCount(arrayRegister)).toEqual(8)
    })
    test('Square every digit and concatenate them',()=> {
        expect(funcs.squareFunc(34)).toEqual(916)
    })
})

// ##### SLIDE 55 TESTS #####
describe('slide 55 challenges', ()=>{
    test('Given a year return back the century it is in', ()=>{
        expect(funcs.year(1705)).toBe(17)
        expect(funcs.year(5)).toEqual("not a century")
    })
})