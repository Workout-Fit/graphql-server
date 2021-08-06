import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export default class MuscleGroup {
  @Field()
  id!: number;

  @Field()
  name!: string;
}
