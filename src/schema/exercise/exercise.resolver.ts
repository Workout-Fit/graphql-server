import { Arg, Ctx, Resolver } from 'type-graphql';
import { Context } from '../../context';
import * as equipmentService from './exercise.service';

@Resolver()
export default class ExerciseResolver {
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
  async getExerciseById(@Arg('id') id: string, @Ctx() ctx: Context) {
    return await equipmentService.getExerciseById(id, ctx);
  }
}
