import { ObjectType, Field } from 'type-graphql';

@ObjectType()
export default class Difficulty {
  @Field()
  id!: number;

  @Field()
  name!: string;
}
