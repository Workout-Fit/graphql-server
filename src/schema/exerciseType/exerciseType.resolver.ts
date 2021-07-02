import { Context } from '../../context';
import * as exerciseTypeService from './exerciseType.service';

const resolvers = {
  Query: {
    getExerciseTypes: async (parent, _, ctx: Context) =>
      await exerciseTypeService.getExerciseTypes(ctx),
    getExerciseTypesByName: async (_, args, ctx: Context) =>
      await exerciseTypeService.getExerciseTypesByName(args.name, ctx),
    getExerciseTypeById: async (_, args, ctx: Context) =>
      await exerciseTypeService.getExerciseTypeById(args.id, ctx),
  },
};

export default resolvers;
