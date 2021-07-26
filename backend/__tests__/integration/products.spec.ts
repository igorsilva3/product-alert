import { Product } from '@prisma/client'
import faker from 'faker'
import { agent } from 'supertest'
import app from '../../src/app'

const request = agent(app)

const createProduct = (): Product => ({
	id: faker.datatype.uuid(),
	name: faker.commerce.productName(),
	company: faker.company.companyName(),
	amount: faker.datatype.number(),
	expirationDate: faker.date.future(),
	createdAt: faker.date.recent(),
	updatedAt: faker.date.recent(),
  userId: faker.datatype.uuid()
})

describe('Router products', () => {
  it('should create a product', async () => {
  })
  it('should to list all products created', async () => {
	})
	it('should to list a product by passing id', async () => {
	})
	it('should to update a product by passing id', async () => {
	})
	it('should to delete a product', async () => {
	})
})