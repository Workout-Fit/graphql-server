import { Resolver, Query, Arg, Ctx } from 'type-graphql';
import { Context } from '../../context';
import * as exerciseTypeService from './exerciseType.service';
import ExerciseType from './exerciseType.type';

@Resolver(() => ExerciseType)
export default class ExerciseTypeResolver {
  @Query(() => [ExerciseType])
  async getExerciseTypes(
    @Arg('name', { nullable: true }) name: string,
    @Ctx() ctx: Context
  ) {
    return await exerciseTypeService.getExerciseTypes(name, ctx);
  }

  @Query(() => ExerciseType)
  async getExerciseTypeById(@Arg('id') id: number, @Ctx() ctx: Context) {
    return await exerciseTypeService.getExerciseTypeById(id, ctx);
  }
}
