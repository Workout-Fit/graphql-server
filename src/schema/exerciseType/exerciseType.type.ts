import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export default class ExerciseType {
  @Field()
  id!: number;

  @Field()
  name!: string;
}
