import { Arg, Ctx, Mutation, Query, Resolver } from 'type-graphql';
import { Context } from '../../context';
import * as workoutService from './workout.service';
import { Workout, WorkoutInput } from './workout.type';

@Resolver(() => Workout)
export default class WorkoutResolver {
  @Query(() => [Workout])
  async getWorkoutsByUserId(
    @Arg('userId') userId: string,
    @Arg('workoutName', { nullable: true }) workoutName: string,
    @Ctx() ctx: Context
  ) {
    return await workoutService.getWorkoutsByUserId(userId, workoutName, ctx);
  }

  @Query(() => Workout)
  async getWorkoutById(@Arg('id') id: string, @Ctx() ctx: Context) {
    return await workoutService.getWorkoutById(id, ctx);
  }

  @Mutation(() => Workout)
  async createWorkout(
    @Arg('workout') workout: WorkoutInput,
    @Ctx() ctx: Context
  ) {
    return await workoutService.createWorkout(workout, ctx);
  }

  @Mutation(() => Workout)
  async copyWorkoutById(
    @Arg('id') id: string,
    @Arg('userId') userId: string,
    @Ctx() ctx: Context
  ) {
    return await workoutService.copyWorkoutById(id, userId, ctx);
  }

  @Mutation(() => Workout)
  async deleteWorkout(@Arg('id') id: string, @Ctx() ctx: Context) {
    return await workoutService.deleteWorkout(id, ctx);
  }

  @Mutation(() => Workout)
  async updateWorkout(
    @Arg('id') id: string,
    @Arg('workout') workout: WorkoutInput,
    @Ctx() ctx: Context
  ) {
    return await workoutService.updateWorkout(id, workout, ctx);
  }
}
