import { Request, Response } from 'express'
import { PrismaClient } from '@prisma/client'
import { compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'
import * as Yup from 'yup'

import { env } from '../env'

const prisma = new PrismaClient()

const schema = Yup.object().shape({
  email: Yup.string().email().required('Email is required'),
  password: Yup.string().required('Password is required'),
})

class AuthController {
  public async signup(request: Request, response: Response) {
    try {
      const { email, password } = request.body

      // Validate data
      await schema.validate({
        email,
        password,
      }, {
        abortEarly: false,
      })

      // check if email already exists
      const user = await prisma.user.findUnique({
        where: { email }
      })

      // valid the password
      const isValidPassword = await compare(password, String(user?.password))

      if (!user && !isValidPassword) {
        throw new Error('User does not exist!')
      }
      // get secret key
      const secretKey = env("SECRET_KEY")

      // generate token
      const token = sign({ id: user?.id }, String(secretKey), {
        expiresIn: '15m',
      })

      return response.status(200).json({
        user: {
          id: user?.id,
          firstName: user?.firstName,
          lastName: user?.lastName,
          email: user?.email,
          createdAt: user?.createdAt,
          updatedAt: user?.updatedAt
        },
        token
      })

    } catch (error) {
      return response.status(400).json(error instanceof Yup.ValidationError ? {
        type: 'validation',
        message: error.errors,
        statusCode: 400
      } : error)
    }
  }
}

export default new AuthController()