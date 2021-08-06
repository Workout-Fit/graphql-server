import { Context } from '../../context';

export const getEquipments = async (name: string, ctx: Context) =>
  await ctx.prisma.equipment.findMany({
    where: {
      name: {
        contains: name,
        mode: 'insensitive',
      },
    },
  });

export const getEquipmentById = async (id: number, ctx: Context) =>
  await ctx.prisma.equipment.findUnique({ where: { id } });
