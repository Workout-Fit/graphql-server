import { Arg, Ctx, Query, Resolver } from 'type-graphql';
import { Context } from '../../context';
import * as languageService from './language.service';
import Language from './language.type';

@Resolver(() => Language)
export default class LanguageResolver {
  @Query(() => [Language])
  async getLanguages(
    @Arg('name', { nullable: true }) name: string,
    @Arg('id', { nullable: true }) id: string,
    @Ctx() ctx: Context
  ) {
    return await languageService.getLanguages(name, id, ctx);
  }

  @Query(() => Language)
  async getLanguageById(@Arg('id') id: number, @Ctx() ctx: Context) {
    return await languageService.getLanguageById(id, ctx);
  }
}
