import { Context } from '../../context';
import { GQLProfileInfoInput } from '../../types';
import { uploadToBucket } from '../../utils/image';

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
) => {
  let profilePictureUrl;
  if (profileInfo.profilePicture) {
    const { createReadStream } = await profileInfo.profilePicture;
    const stream = createReadStream();
    profilePictureUrl = await uploadToBucket(stream);
  }

  return await ctx.prisma.user.update({
    where: { id: userId },
    data: {
      profileInfo: {
        update: { ...profileInfo, profilePicture: profilePictureUrl },
      },
    },
    include: { profileInfo: true },
  });
};
