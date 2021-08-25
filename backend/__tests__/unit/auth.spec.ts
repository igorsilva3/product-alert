import { agent } from 'supertest'
import app from '../../src/app'
import { createUser } from '../utils/factories'

const request = agent(app)

const user = createUser()

describe('Authenticate a user', () => {
	it('should create a user', async () => {
		const { statusCode } = await request.post('/v1/users').send(user)
		expect(statusCode).toEqual(201)
	})
	it('should get a token', async () => {
		const { statusCode } = await request.post('/v1/auth/').send({
			email: user.email,
			password: user.password,
		})

		expect(statusCode).toEqual(200)
	})
})
