import { Context } from '../../context';

export const getDifficultyLevels = async (ctx: Context) =>
  ctx.prisma.difficulty.findMany();

export const getDifficultyLevelsByName = async (name: string, ctx: Context) =>
  await ctx.prisma.difficulty.findMany({
    where: {
      name: {
        contains: name,
      },
    },
  });

export const getDifficultyById = async (id: number, ctx: Context) =>
  await ctx.prisma.difficulty.findUnique({ where: { id } });
