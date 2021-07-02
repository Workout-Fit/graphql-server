import { Context } from '../../context';
import * as equipmentService from './exercise.service';

const resolvers = {
  Query: {
    getExercises: async (_, args, ctx: Context) =>
      await equipmentService.getExercises(
        args.muscleGroupId,
        args.exerciseTypeId,
        args.equipmentId,
        args.difficultyId,
        ctx
      ),
    getExerciseById: async (_, args, ctx: Context) =>
      await equipmentService.getExerciseById(args.id, ctx),
    getExercisesByName: async (_, args, ctx: Context) =>
      await equipmentService.getExercisesByName(args.name, ctx),
  },
};

export default resolvers;
