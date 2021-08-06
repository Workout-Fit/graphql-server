import { Arg, Ctx, Mutation, Query, Resolver } from 'type-graphql';
import { Context } from '../../context';
import * as workoutService from './workout.service';
import { Workout, WorkoutInput } from './workout.type';

@Resolver((of) => Workout)
export default class WorkoutResolver {
  @Query((returns) => [Workout])
  async getWorkoutsByUserId(
    @Arg('userId') userId: string,
    @Ctx() ctx: Context
  ) {
    return await workoutService.getWorkoutsByUserId(userId, ctx);
  }

  @Query((returns) => Workout)
  async getWorkoutById(@Arg('id') id: string, @Ctx() ctx: Context) {
    return await workoutService.getWorkoutById(id, ctx);
  }

  @Mutation((returns) => Workout)
  async createWorkout(
    @Arg('workout') workout: WorkoutInput,
    @Ctx() ctx: Context
  ) {
    return await workoutService.createWorkout(workout, ctx);
  }

  @Mutation((returns) => Workout)
  async copyWorkoutById(
    @Arg('id') id: string,
    @Arg('userId') userId: string,
    @Ctx() ctx: Context
  ) {
    return await workoutService.copyWorkoutById(id, userId, ctx);
  }

  @Mutation((returns) => Workout)
  async deleteWorkout(@Arg('id') id: string, @Ctx() ctx: Context) {
    await workoutService.deleteWorkout(id, ctx);
  }

  @Mutation((returns) => Workout)
  async updateWorkout(
    @Arg('id') id: string,
    @Arg('workout') workout: WorkoutInput,
    @Ctx() ctx: Context
  ) {
    return await workoutService.updateWorkout(id, workout, ctx);
  }
}
