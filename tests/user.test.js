const request = require('supertest')
const app = require('../src/app')

test('Should sign up a new user', async()=>{
    await request(app).post('/users').send({
        name:'Lindsay',
        email: 'lindy@email.com',
        password:'Comter2019'
    }).expect(201)
})