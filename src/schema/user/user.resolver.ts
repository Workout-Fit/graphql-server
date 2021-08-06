import { Arg, Ctx, Mutation, Query, Resolver } from 'type-graphql';
import { Context } from '../../context';
import * as userService from './user.service';
import { ProfileInfo, ProfileInfoInput, User } from './user.type';

@Resolver((of) => User)
export default class UserResolver {
  @Query((returns) => User)
  async getUserById(@Arg('id') id: string, @Ctx() ctx: Context) {
    return await userService.getUserById(id, ctx);
  }
  @Mutation((returns) => User)
  async createUser(
    @Arg('userId') userId: string,
    @Arg('profileInfo') profileInfo: ProfileInfoInput,
    @Ctx() ctx: Context
  ) {
    return await userService.createUser(userId, profileInfo, ctx);
  }
  @Mutation((returns) => User)
  async updateProfileInfo(
    @Arg('userId') userId: string,
    @Arg('profileInfo') profileInfo: ProfileInfoInput,
    @Ctx() ctx: Context
  ) {
    return await userService.updateProfileInfo(userId, profileInfo, ctx);
  }
}
const resolvers = {
  Query: {},
  Mutation: {},
};
