import { Context } from '../../context';

export const getMuscleGroups = async (ctx: Context) =>
  ctx.prisma.muscleGroup.findMany();

export const getMuscleGroupsByName = async (name: string, ctx: Context) =>
  await ctx.prisma.muscleGroup.findMany({ where: { 
            name: {
            contains: name
          } 
        }, });

export const getMuscleGroupById = async (id: number, ctx: Context) =>
  await ctx.prisma.muscleGroup.findUnique({ where: { id } });
