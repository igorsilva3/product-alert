import faker from 'faker'
import { Product, User } from '@prisma/client'

// Factory User
export const createUser = (): User => ({
	id: faker.datatype.uuid(),
	firstName: faker.name.firstName(),
	lastName: faker.name.lastName(),
	email: faker.internet.email(),
	password: faker.internet.password(),
	createdAt: faker.date.recent(),
	updatedAt: faker.date.recent(),
})

// Factory Product
export const createProduct = (data?: { userId: string }): Product => ({
	id: faker.datatype.uuid(),
	name: faker.commerce.productName(),
	company: faker.company.companyName(),
	amount: faker.datatype.number(),
	expirationDate: faker.date.future(),
	createdAt: faker.date.recent(),
	updatedAt: faker.date.recent(),
	userId: data?.userId || faker.datatype.uuid(),
})
