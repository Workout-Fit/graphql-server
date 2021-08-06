import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export default class Equipment {
  @Field()
  id!: number;

  @Field()
  name!: string;
}
