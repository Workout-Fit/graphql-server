import { Context } from '../../context';

export const getUserById = async (id: string, ctx: Context) =>
  await ctx.prisma.user.findUnique({
    where: { id },
    include: { profileInfo: true },
  });
