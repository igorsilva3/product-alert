import { Request, Response, NextFunction } from 'express'
import { verify } from 'jsonwebtoken'

import { env } from '../env'

class AuthMiddleware {
  public async verifyToken(request: Request, response: Response, next: NextFunction){
    const token = request.headers.authorization

    if(!token) return response.status(401).json({ message: 'Token not provided' })

    // get secret key from env
    const secretkey = env("SECRET_KEY")

    try {
      // verify token
      const decoded = verify(token, String(secretkey))

      request.body.userId = decoded
      return next()
    } catch (error) {
      return response.status(401).json({ message: 'Token invalid' })
    }
  }
}

export default new AuthMiddleware()