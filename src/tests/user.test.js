const app = require('../app')
const request = require('supertest')
const User = include('models/users')

beforeAll(async () => {
    await User.deleteMany()
})

test('Should call GET method successfuly', async () => {
    await request(app).get('/users').expect(200)
})

test('Should call POST method successfuly and create a new user', async () => {
    await request(app)
        .post('/users')
        .send({
            name: 'Francisco',
            email: 'email@email2.com',
            password: 'consolelog',
            age: 23
        })
        .expect(201)
})
