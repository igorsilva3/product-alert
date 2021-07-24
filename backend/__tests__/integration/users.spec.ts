import { User } from '@prisma/client'
import faker from 'faker'
import { agent } from 'supertest'
import app from '../../src/app'

const request = agent(app)

// Factory User
const createUser = (): User => ({
	id: faker.datatype.uuid(),
	firstName: faker.name.firstName(),
	lastName: faker.name.lastName(),
	email: faker.internet.email(),
	password: faker.internet.password(),
	createdAt: faker.date.recent(),
	updatedAt: faker.date.recent(),
})

const user = createUser()

describe('Router users', () => {
	it('should create a user', async () => {
		const { statusCode } = await request.post('/v1/users').send(user)

		expect(statusCode).toEqual(201)
	})
	it('should to list all users created', async () => {
		const { statusCode } = await request.get('/v1/users')

		expect(statusCode).toEqual(200)
	})
	it('should to list a user by passing id', async () => {
		const { statusCode } = await request.get(`/v1/users/${user.id}`)

		expect(statusCode).toEqual(200)
	})
	it('should to update a user by passing id', async () => {
		user.firstName = faker.name.firstName()
		user.email = faker.internet.email()

		const { statusCode } = await request.put(`/v1/users/${user.id}`).send(user)

		expect(statusCode).toEqual(200)
	})
	it('should to delete a user', async () => {
		const { statusCode } = await request.delete(`/v1/users/${user.id}`)

		expect(statusCode).toEqual(200)
	})
})
