import { Context } from '../../context';
import * as workoutService from './workout.service';

const resolvers = {
  Query: {
    getWorkoutsByUserId: async (_, { userId }, ctx: Context) =>
      await workoutService.getWorkoutsByUserId(userId, ctx),

    getWorkoutById: async (_, { id }, ctx: Context) =>
      await workoutService.getWorkoutById(id, ctx),
  },
  Mutation: {
    createWorkout: async (_, args, ctx: Context) =>
      await workoutService.createWorkout(args.workout, ctx),

    copyWorkoutById: async (_, args, ctx: Context) =>
      await workoutService.copyWorkoutById(args.workoutId, args.userId, ctx),
  },
};

export default resolvers;
