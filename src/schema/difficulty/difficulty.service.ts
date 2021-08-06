import { Context } from '../../context';

export const getDifficultyLevels = async (name: string, ctx: Context) =>
  await ctx.prisma.difficulty.findMany({
    where: {
      name: {
        contains: name,
        mode: 'insensitive',
      },
    },
  });

export const getDifficultyById = async (id: number, ctx: Context) =>
  await ctx.prisma.difficulty.findUnique({ where: { id } });
