import { PrismaClient } from '@prisma/client'
import faker from 'faker'
import { hash } from 'bcrypt'

const prisma = new PrismaClient()

async function main() {
  // Create a user
  const password = '123456abcd'

  await prisma.user.create({
    data: {
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
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