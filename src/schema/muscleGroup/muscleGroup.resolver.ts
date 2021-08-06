import { Arg, Ctx, Query, Resolver } from 'type-graphql';
import { Context } from '../../context';
import * as muscleGroupService from './muscleGroup.service';
import MuscleGroup from './muscleGroup.type';

@Resolver(() => MuscleGroup)
export default class MuscleGroupResolver {
  @Query(() => [MuscleGroup])
  async getMuscleGroups(
    @Arg('name', { nullable: true }) name: string,
    @Ctx() ctx: Context
  ) {
    return await muscleGroupService.getMuscleGroups(name, ctx);
  }

  @Query(() => MuscleGroup)
  async getMuscleGroupById(@Arg('id') id: number, @Ctx() ctx: Context) {
    return await muscleGroupService.getMuscleGroupById(id, ctx);
  }
}
