import { Context } from '../../context';
import * as equipmentService from './exercise.service';

const resolvers = {
  Query: {
    getExercises: async (_, args, ctx: Context) =>
      await equipmentService.getExercises(
        args.name,
        args.muscleGroupId,
        args.exerciseTypeId,
        args.equipmentId,
        args.difficultyId,
        ctx
      ),
    getExerciseById: async (_, args, ctx: Context) =>
      await equipmentService.getExerciseById(args.id, ctx),
  },
};

export default resolvers;
