import { Context } from '../../context';

export const getLanguages = async (
  name: string,
  languageCode: string,
  ctx: Context
) =>
  await ctx.prisma.language.findMany({
    where: {
      languageCode,
      name: {
        contains: name,
        mode: 'insensitive',
      },
    },
  });

export const getLanguageById = async (id: number, ctx: Context) =>
  await ctx.prisma.language.findUnique({ where: { id } });
