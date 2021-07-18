import { prismaMock } from '../singleton'
import { User } from '@prisma/client'
import faker from 'faker'

const createUser = <User>() => ({
	id: faker.datatype.uuid(),
	firstName: faker.name.firstName(),
	lastName: faker.name.lastName(),
	email: faker.internet.email(),
	password: faker.internet.password(),
	createdAt: faker.date.recent(),
	updatedAt: faker.date.recent(),
})

describe('Router users', () => {
	it('should to list all users created', async () => {
		prismaMock.user.findMany.mockResolvedValue([])
		const users = await prismaMock.user.findMany()

		expect(users).toMatchObject([])
	})
})
