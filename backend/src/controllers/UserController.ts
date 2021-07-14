import { Request, Response } from 'express'
import { PrismaClient, Product } from '@prisma/client'
import * as Yup from 'yup'
import { hash } from 'bcrypt'

const prisma = new PrismaClient()

const schema = Yup.object().shape({
	firstName: Yup.string().required('O campo nome é obrigatório'),
	lastName: Yup.string().required('O campo sobrenome é obrigatório'),
	email: Yup.string().required('O campo email é obrigatório'),
	password: Yup.string().required('O campo senha é obrigatório'),
})

class UserController {
	public async index(request: Request, response: Response) {
		try {
			const users = await prisma.user.findMany({
				orderBy: {
					firstName: 'asc',
				},
				select: {
					id: true,
					firstName: true,
					lastName: true,
					email: true,
					createdAt: true,
					updatedAt: true,
					products: true,
				},
			})

			return response.status(200).json(users)
		} catch (error) {
			return response.status(400).json({ error })
		}
	}

	public async create(request: Request, response: Response) {
		try {
			const { firstName, lastName, email, password } = request.body

			const data = {
				firstName,
				lastName,
				email,
				password: await hash(password, 32),
			}

			await schema.validate(data, {
				abortEarly: false,
			})

			const user = await prisma.user.create({
				data,
				select: {
					id: true,
					firstName: true,
					lastName: true,
					email: true,
					createdAt: true,
					updatedAt: true,
					products: true,
				},
			})

			return response.status(200).json(user)
		} catch (error) {
			return response.status(400).json({
				error: error instanceof Yup.ValidationError ? error.errors : error,
			})
		}
	}
}

export default new UserController()
