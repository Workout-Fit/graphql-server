import { Context } from '../../context';
import * as userService from './user.service';

const resolvers = {
  Query: {
    getUserById: async (_, args, ctx: Context) =>
      await userService.getUserById(args.id, ctx),
  },
  Mutation: {
    createUser: async (_, args, ctx: Context) =>
      await userService.createUser(args.userId, args.profileInfo, ctx),
  },
};

export default resolvers;
