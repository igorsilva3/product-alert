import express from 'express'
import cors from 'cors'
import morgan from 'morgan'

import routes from '@routes'
import { AuthMiddleware } from "@middlewares"

class Application {
	public express: express.Application

	constructor() {
		this.express = express()
		this.errors()
		this.middlewares()
		this.routes()
	}

	// Removes middleware validation from the route
	// private unless(path: string, middleware: any) {
	// 	return (request: express.Request, response: express.Response, next: express.NextFunction) => {
	// 		if (path === request.path) {
	// 			return next()
	// 		}
	// 		return middleware(request, response, next)
	// 	}
	// }

	private middlewares(): void {
		this.express.use(cors())
		this.express.use(express.json())
		this.express.use(express.urlencoded({ extended: true }))
		this.express.use(morgan('dev'))
	}

	// Internal server error
	private errors(): void {
		this.express.use((error: Error, request: express.Request, response: express.Response, next: express.NextFunction) => {
			response.status(500).json({
				message: error.message,
				error: error
			})
		})
	}

	private routes(): void {
		this.express.use('/v1', routes)
	}
}

export default new Application().express
