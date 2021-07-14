import express from 'express'
import cors from 'cors'
import morgan from 'morgan'

import routes from './routes'

class Application {
	public express: express.Application

	constructor() {
		this.express = express()
		this.middlewares()
		this.routes()
	}

	private middlewares(): void {
		this.express.use(cors())
		this.express.use(express.json())
		this.express.use(express.urlencoded({ extended: true }))
		this.express.use(morgan('dev'))
	}

	private routes(): void {
		this.express.use('/v1', routes)
	}
}

export default new Application().express
