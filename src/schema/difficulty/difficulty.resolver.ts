import { Context } from '../../context';
import * as difficultyService from './difficulty.service';

const resolvers = {
  Query: {
    getDifficultyLevels: async (parent, _, ctx: Context) =>
      await difficultyService.getDifficultyLevels(ctx),
    getDifficultyLevelsByName: async (_, args, ctx: Context) =>
      await difficultyService.getDifficultyLevelsByName(args.name, ctx),
    getDifficultyById: async (_, args, ctx: Context) =>
      await difficultyService.getDifficultyById(args.id, ctx),
  },
};

export default resolvers;
