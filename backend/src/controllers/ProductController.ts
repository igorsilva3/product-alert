import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'
import * as Yup from 'yup'

class ProductController {
	public async index(request: Request, response: Response) {}

	public async show(request: Request, response: Response) {}

	public async create(request: Request, response: Response) {}

	public async update(request: Request, response: Response) {}

	public async delete(request: Request, response: Response) {}
}

export default new ProductController()
