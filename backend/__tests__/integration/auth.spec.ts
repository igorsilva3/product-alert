import { agent } from 'supertest'
import app from '../../src/app'

const request = agent(app)

const user = {
	email: 'igor@mail.com',
	password: '123456abcd'
}

describe('Authenticate a user', () => {
	it('should get a token', async () => {
		const { statusCode, body } = await request.post('/v1/auth/').send({
			email: user.email,
			password: user.password,
		})

		expect({ statusCode, body }).toEqual({
			statusCode: 200,
			body: {
				user: {
					id: expect.any(String),
					firstName: expect.any(String),
					lastName: expect.any(String),
					email: expect.any(String),
					createdAt: expect.any(String),
					updatedAt: expect.any(String),
				},
				token: expect.any(String),
			},
		})
	})
})
