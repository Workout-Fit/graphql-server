import { Context } from '../../context';

export const getEquipments = async (ctx: Context) =>
  ctx.prisma.equipment.findMany();

export const getEquipmentsByName = async (name: string, ctx: Context) =>
  await ctx.prisma.equipment.findMany({
    where: {
      name: {
        contains: name,
      },
    },
  });

export const getEquipmentById = async (id: number, ctx: Context) =>
  await ctx.prisma.equipment.findUnique({ where: { id } });
