import { Arg, Ctx, Mutation, Query, Resolver } from 'type-graphql';
import { Context } from '../../context';
import * as userService from './user.service';
import { ProfileInfoInput, User } from './user.type';

@Resolver(() => User)
export default class UserResolver {
  @Query(() => User)
  async getUserById(@Arg('id') id: string, @Ctx() ctx: Context) {
    return await userService.getUserById(id, ctx);
  }
  @Mutation(() => User)
  async createUser(
    @Arg('userId') userId: string,
    @Arg('profileInfo') profileInfo: ProfileInfoInput,
    @Ctx() ctx: Context
  ) {
    return await userService.createUser(userId, profileInfo, ctx);
  }
  @Mutation(() => User)
  async updateProfileInfo(
    @Arg('userId') userId: string,
    @Arg('profileInfo') profileInfo: ProfileInfoInput,
    @Ctx() ctx: Context
  ) {
    return await userService.updateProfileInfo(userId, profileInfo, ctx);
  }
}
