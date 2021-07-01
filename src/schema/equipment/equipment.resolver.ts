import prisma from '../../db';

const resolvers = {
  Query: {
    getEquipments: async (parent) => prisma.equipment.findMany(),
    getEquipmentsByName: async (parent, args) =>
      await prisma.equipment.findMany({
        where: { name: args.name }
      }),
    getEquipmentById: async (parent, args) =>
      await prisma.equipment.findUnique({
        where: { id: args.id }
      }),
  },
};

export default resolvers;
