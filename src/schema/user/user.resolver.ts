import { Context } from '../../context';
import * as userService from './user.service';

const resolvers = {
  Query: {
    getUserById: async (_, args, ctx: Context) =>
      await userService.getUserById(args.id, ctx),
  },
};

export default resolvers;
