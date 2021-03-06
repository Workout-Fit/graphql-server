import { Arg, Ctx, Query, Resolver } from 'type-graphql';
import { Context } from '../../context';
import * as equipmentService from './exercise.service';
import Exercise from './exercise.type';

@Resolver(() => Exercise)
export default class ExerciseResolver {
  @Query(() => [Exercise])
  async getExercises(
    @Arg('name', { nullable: true }) name: string,
    @Arg('muscleGroupId', { nullable: true }) muscleGroupId: number,
    @Arg('exerciseTypeId', { nullable: true }) exerciseTypeId: number,
    @Arg('equipmentId', { nullable: true }) equipmentId: number,
    @Arg('difficultyId', { nullable: true }) difficultyId: number,
    @Ctx() ctx: Context
  ) {
    return await equipmentService.getExercises(
      name,
      muscleGroupId,
      exerciseTypeId,
      equipmentId,
      difficultyId,
      ctx
    );
  }

  @Query(() => Exercise)
  async getExerciseById(@Arg('id') id: string, @Ctx() ctx: Context) {
    return await equipmentService.getExerciseById(id, ctx);
  }
}
