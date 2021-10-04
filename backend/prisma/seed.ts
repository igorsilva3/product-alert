import { PrismaClient } from '@prisma/client'
import { hash } from 'bcrypt'

const prisma = new PrismaClient()

async function main() {
  // Create a user
  const password = '123456abcd'

  await prisma.user.upsert({
    where: {
      email: 'igor@mail.com'
    },
    update: {
      updatedAt: new Date()
    },
    create: {
      firstName: 'Igor',
      lastName: 'Silva',
      email: 'igor@mail.com',
      password: await hash(password, 10)
    }
  })
}

main()
  .catch(error => {
    console.error(error)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })