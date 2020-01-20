const {calculateTip} = require('../src/math')
const {fahrenheitToCelsius} = require('../src/math')
const {celsiusToFahrenheit, add} = require('../src/math')



test('should calculate total with tip', ()=>{
    const total =calculateTip(10, .3)
    expect(total).toBe(13)
    // if(total !==13){
    //     throw new Error('Total tip should be 13. Got ' + total)
    // }
})
test('should calculate total with default tip', ()=>{
    const total= calculateTip(10)
    expect(total).toBe(12.5)
})



test('should convert 32F to 0C',()=>{
    const celcius = fahrenheitToCelsius(32)
    expect(celcius).toBe(0)
})

test('should convert 0C to 32F',()=>{
    const fahrenheit = celsiusToFahrenheit(0)
    expect(fahrenheit).toBe(32)
})


test('Should add two numbers', (done)=>{
    add(2,3).then((sum)=>{
        expect(sum).toBe(5)
        done()   
 })
})

test('Should add 2 numbers async/await', async()=>{
    const sum = await add(10,22)
    expect(sum).toBe(32)
})