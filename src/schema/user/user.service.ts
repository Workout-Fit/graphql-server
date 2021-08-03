import { Context } from '../../context';
import { GQLProfileInfoInput } from '../../types';

export const getUserById = async (id: string, ctx: Context) =>
  await ctx.prisma.user.findUnique({
    where: { id },
    include: { profileInfo: true },
  });

export const createUser = async (
  userId: string,
  profileInfo: GQLProfileInfoInput,
  ctx: Context
) =>
  await ctx.prisma.user.create({
    data: {
      id: userId,
      profileInfo: {
        create: profileInfo,
      },
    },
    include: { profileInfo: true },
  });

export const updateProfileInfo = async (
  userId: string,
  profileInfo: GQLProfileInfoInput,
  ctx: Context
) =>
  await ctx.prisma.user.update({
    where: { id: userId },
    data: {
      profileInfo: {
        update: profileInfo,
      },
    },
    include: { profileInfo: true },
  });
