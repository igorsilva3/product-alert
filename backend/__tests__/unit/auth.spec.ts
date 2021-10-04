import { AuthService } from '../../src/services/AuthService'

const authService = new AuthService()

const user = {
	email: 'igor@mail.com',
	password: '123456abcd',
	token: ''
}

describe('Authenticate a user', () => {
	it('should get a token', async () => {
		const { user: User, token } = await authService.signin(user.email, user.password)
		
		user.token = token

		expect({ User, token }).toEqual({
			User: {
				id: expect.any(String),
				firstName: expect.any(String),
				lastName: expect.any(String),
				email: expect.any(String),
				createdAt: expect.any(Date),
				updatedAt: expect.any(Date),
			},
			token: expect.any(String),
		})
	}),
	it('should verify a token', async () => {
		const decoded = await authService.decode(user.token)
		expect(decoded).toEqual({
			userId: expect.any(String),
			iat: expect.any(Number),
			exp: expect.any(Number),
		})
	})
})
