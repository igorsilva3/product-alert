import faker from 'faker'
import { agent } from 'supertest'
import app from '../../src/app'
import { createProduct, createUser } from '../utils/factories'

const request = agent(app)

const user = createUser()
const product = createProduct({ userId: user.id })

describe('Router products', () => {
	it('should create a user', async () => {
		const { statusCode } = await request.post('/v1/users').send(user)
		expect(statusCode).toEqual(201)
	})
	it('should create a product', async () => {
		const { statusCode } = await request.post('/v1/products').send(product)
		expect(statusCode).toEqual(201)
	})
	it('should to list all products created', async () => {
		const { statusCode } = await request.get('/v1/products/')
		expect(statusCode).toEqual(200)
	})
	it('should to list a product by passing id', async () => {
		const { statusCode } = await request.get(`/v1/products/${product.id}`)
		expect(statusCode).toEqual(200)
	})
	it('should to update a product by passing id', async () => {
		product.amount = faker.datatype.number()

		const { statusCode } = await request.put(`/v1/products/${product.id}`).send(product)
		expect(statusCode).toEqual(200)
	})
	it('should to delete a product', async () => {
		const { statusCode } = await request.delete(`/v1/products/${product.id}`)
		expect(statusCode).toEqual(200)
	})
})
