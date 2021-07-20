import { prismaMock } from '../singleton'
import { prisma, User } from '@prisma/client'
import faker from 'faker'

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

const userFake = createUser()

describe('Router users', () => {
	it('should create a user', async () => {
		prismaMock.user.create.mockResolvedValue(userFake)

		const user = await prismaMock.user.create({
			data: {
				...createUser()
			}
		})

		expect(user).toBe(userFake)
	})
	it('should to list all users created', async () => {
		prismaMock.user.findMany.mockResolvedValue([])
		const users = await prismaMock.user.findMany()

		expect(users).toEqual([])
	})
	it('should to list a user by passing id', async () => {
		prismaMock.user.findUnique.mockResolvedValueOnce(userFake)

		const user = await prismaMock.user.findUnique({
			where: {
				id: userFake.id
			}
		})

		expect(user).toEqual(userFake)
	})
	it('should to delete a user', async () => {
		prismaMock.user.delete.mockResolvedValueOnce(userFake)

		const user = await prismaMock.user.delete({
			where: {
				id: userFake.id
			}
		})

		expect(user).toEqual(userFake)
	})
})
