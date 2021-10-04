import { PrismaClient } from '@prisma/client'
import { compare } from 'bcrypt'
import { sign, verify } from 'jsonwebtoken'
import { env } from '../env'

export class AuthService {
	private prisma: PrismaClient

	constructor() {
		this.prisma = new PrismaClient()
	}

	async signin(email: string , password: string) {
		try {
			// check if email already exists
			const user = await this.prisma.user.findUnique({
				where: { email }
      })

			// valid the password
			const isValidPassword = await compare(password, String(user?.password))

			if (!user && !isValidPassword) {
				throw new Error('User does not exist!')
			}

			// get secret key
			const secretKey = env('SECRET_KEY')

			// generate token
			const token = sign({ id: user?.id }, String(secretKey), {
				expiresIn: '15m',
			})

			return {
				user: {
					id: user?.id,
					firstName: user?.firstName,
					lastName: user?.lastName,
					email: user?.email,
					createdAt: user?.createdAt,
					updatedAt: user?.updatedAt,
				},
				token,
			}
		} catch (error) {
			throw error
		}
	}

  async decode(token: string) {
    try {
      const secretKey = env('SECRET_KEY')
      const decoded = verify(token, String(secretKey))
      
      if (typeof decoded === 'string') {
        return {
          userId: decoded,
        }
      }

      return {
        userId: decoded.id, 
        iat: decoded.iat,
        exp: decoded.exp
      }
    } catch (error) {
      throw error
    }
  }
}
