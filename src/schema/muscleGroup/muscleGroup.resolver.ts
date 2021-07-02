import { Context } from '../../context';
import * as muscleGroupService from './muscleGroup.service';

const resolvers = {
  Query: {
    getMuscleGroups: async (parent, _, ctx: Context) =>
      await muscleGroupService.getMuscleGroups(ctx),
    getMuscleGroupsByName: async (_, args, ctx: Context) =>
      await muscleGroupService.getMuscleGroupsByName(args.name, ctx),
    getMuscleGroupById: async (_, args, ctx: Context) =>
      await muscleGroupService.getMuscleGroupById(args.id, ctx),
  },
};

export default resolvers;
