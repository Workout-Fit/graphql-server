import { Arg, Ctx, Query, Resolver } from 'type-graphql';
import { Context } from '../../context';
import * as languageService from './language.service';
import Language from './language.type';

@Resolver((of) => Language)
export default class LanguageResolver {
  @Query((returns) => [Language])
  async getLanguages(
    @Arg('name', { nullable: true }) name: string,
    @Arg('id', { nullable: true }) id: string,
    @Ctx() ctx: Context
  ) {
    return await languageService.getLanguages(name, id, ctx);
  }

  @Query((returns) => Language)
  async getLanguageById(@Arg('id') id: number, @Ctx() ctx: Context) {
    return await languageService.getLanguageById(id, ctx);
  }
}
