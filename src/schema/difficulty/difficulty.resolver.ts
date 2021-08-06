import { Context } from 'context';
import Difficulty from './difficulty.type';
import * as difficultyService from './difficulty.service';
import { Resolver, Arg, Ctx } from 'type-graphql';

@Resolver(() => Difficulty)
export default class DifficultyResolver {
  async getDifficultyLevels(
    @Arg('name', { nullable: true }) name: string,
    @Ctx() ctx: Context
  ) {
    return await difficultyService.getDifficultyLevels(name, ctx);
  }
  async getDifficultyById(@Arg('id') id: number, @Ctx() ctx: Context) {
    return await difficultyService.getDifficultyById(id, ctx);
  }
}
