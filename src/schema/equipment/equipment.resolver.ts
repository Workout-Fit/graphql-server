import { Context } from '../../context';

const resolvers = {
  Query: {
    getEquipments: async (parent, _, ctx: Context) =>
      await ctx.prisma.equipment.findMany(),
    getEquipmentsByName: async (_, args, ctx: Context) =>
      await ctx.prisma.equipment.findMany({
        where: { 
            name: {
            contains: args.name
          } 
        },
      }),
    getEquipmentById: async (_, args, ctx: Context) =>
      await ctx.prisma.equipment.findUnique({
        where: { id: args.id },
      }),
  },
};

export default resolvers;
