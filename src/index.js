const app = require('./app')
const port = process.env.PORT

app.listen(port, ()=>{
    console.log('server is up on port ' + port)
})









// const myFunction = async ()=>{
//  const password = 'Red12345'
//  const hashedPassword = await bcrypt.hash(password, 8)

//  console.log(password)
// console.log(hashedPassword)

// const isMatch = await bcrypt.compare('Red12345', hashedPassword)
// console.log(isMatch)
// }
// myFunction()

