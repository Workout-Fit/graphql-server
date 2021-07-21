import { argsToArgsConfig } from 'graphql/type/definition';
import { Context } from '../../context';
import {
  MutationToCopyWorkoutByIdArgs,
  MutationToCreateWorkoutArgs,
  MutationToDeleteWorkoutArgs,
  QueryToGetWorkoutByIdArgs,
  QueryToGetWorkoutsByUserIdArgs,
} from '../../types';
import * as workoutService from './workout.service';

const resolvers = {
  Query: {
    getWorkoutsByUserId: async (
      _,
      { userId }: QueryToGetWorkoutsByUserIdArgs,
      ctx: Context
    ) => await workoutService.getWorkoutsByUserId(userId, ctx),

    getWorkoutById: async (
      _,
      { id }: QueryToGetWorkoutByIdArgs,
      ctx: Context
    ) => await workoutService.getWorkoutById(id, ctx),
  },
  Mutation: {
    createWorkout: async (_, args: MutationToCreateWorkoutArgs, ctx: Context) =>
      await workoutService.createWorkout(args.workout, ctx),

    copyWorkoutById: async (
      _,
      args: MutationToCopyWorkoutByIdArgs,
      ctx: Context
    ) => await workoutService.copyWorkoutById(args.id, args.userId, ctx),

    deleteWorkout: async (_, args: MutationToDeleteWorkoutArgs, ctx: Context) =>
      await workoutService.deleteWorkout(args.id, ctx),

    updateWorkout: async (_, args, ctx: Context) =>
      await workoutService.updateWorkout(args.workout, ctx),
  },
};

export default resolvers;
