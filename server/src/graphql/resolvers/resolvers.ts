import { prisma } from '../../database'

interface User {
  id: number
  firstName: string
  lastName: string
  mobile: string
  email: string
  password: string
  registeredAt: string
}

export const resolvers = {
  getUser: async (args: { id: number }) => {
    return await prisma.user.findUnique({
      where: {
        id: args.id,
      },
    })
  },

  getUsers: async () => {
    return await prisma.user.findMany()
  },

  createUser: async (args: User) => {
    let dateNow = new Date()
    let dd = String(dateNow.getDate()).padStart(2, '0')
    let mm = String(dateNow.getMonth() + 1).padStart(2, '0') //January is 0!
    let yyyy = dateNow.getFullYear()
    let registeredAt = new Date(`${yyyy}-${mm}-${dd}`).toISOString()

    return await prisma.user.create({
      data: {
        firstName: args.firstName,
        lastName: args.lastName,
        mobile: args.mobile,
        email: args.email,
        password: args.password,
        registeredAt,
      },
    })
  },

  deleteUser: async (args: any) => {
    return await prisma.user.delete({
      where: {
        id: Number(args.id),
      },
    })
  },

  updateUser: async (args: any) => {
    return await prisma.user.update({
      where: {
        id: Number(args.id),
      },
      data: {
        firstName: args.firstName !== '' && args.firstName,
        lastName: args.lastName !== '' && args.lastName,
        mobile: args.mobile !== '' && args.mobile,
        email: args.email !== '' && args.email,
        password: args.password !== '' && args.password,
      },
    })
  },
}
