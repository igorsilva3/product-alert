import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'
import * as Yup from 'yup'

const prisma = new PrismaClient()

const schema = Yup.object().shape({
	name: Yup.string().required('O campo nome é obrigatório'),
	company: Yup.string().required('O campo companhia é obrigatório'),
	expirationDate: Yup.string().required(
		'O campo data de expiração é obrigatório'
	),
	amount: Yup.number().required('O campo quantidade é obrigatório'),
	userId: Yup.string().required('O campo userId é obrigatório'),
	createdAt: Yup.date(),
	updatedAt: Yup.date(),
})
class ProductController {
	public async index(request: Request, response: Response) {
		try {
			const products = await prisma.product.findMany({
				orderBy: {
					expirationDate: 'asc',
				},
			})

			if (!products || products.length === 0)
				throw new Error('Products not found')

			return response.status(200).json(products)
		} catch (error) {
			return response.status(400).json({
				error: {
					message: error.message,
				},
			})
		}
	}

	public async show(request: Request, response: Response) {
		try {
			const { id } = request.params
			const product = await prisma.product.findUnique({
				where: { id },
			})

			if (!product || product === null) throw new Error('Product not found')

			return response.status(200).json(product)
		} catch (error) {
			return response.status(400).json({
				error: {
					message: error.message,
				},
			})
		}
	}

	public async create(request: Request, response: Response) {
		try {
			const { id, name, company, expirationDate, amount, userId } = request.body

			const data = {
				id: !id ? undefined : id,
				name,
				company,
				expirationDate,
				amount,
				userId,
			}

			await schema.validate(data, {
				abortEarly: false,
			})

			const product = await prisma.product.create({
				data,
			})

			if (!product || product === null) throw new Error('Product not created')

			return response.status(201).json(product)
		} catch (error) {
			return response.status(400).json({
				error: {
					message:
						error instanceof Yup.ValidationError ? error.errors : error.message,
				},
			})
		}
	}

	public async update(request: Request, response: Response) {
		try {
			const { name, company, expirationDate, amount, userId } = request.body
			const { id } = request.params

			const data = {
				name,
				company,
				expirationDate,
				amount,
				userId,
				updatedAt: new Date().toISOString(),
			}

			await schema.validate(data, {
				abortEarly: false,
			})

			const product = await prisma.product.update({
				where: { id },
				data,
			})

			if (!product || product === null) throw new Error('Product not updated')

			return response.status(200).json(product)
		} catch (error) {
			return response.status(400).json({
				error: error instanceof Yup.ValidationError ? error.errors : error,
			})
		}
	}

	public async delete(request: Request, response: Response) {
		try {
			const { id } = request.params

			const product = await prisma.product.delete({
				where: { id },
			})

			if (!product || product === null) throw new Error('Product not deleted')

			return response
				.status(200)
				.json({ message: 'Product deleted successful' })
		} catch (error) {
			return response.status(400).json({
				error: {
					message: error.message,
				},
			})
		}
	}
}

export default new ProductController()
