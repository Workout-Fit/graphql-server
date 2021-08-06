import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export default class Language {
  @Field()
  id!: number;

  @Field()
  name!: string;

  @Field()
  languageCode!: string;
}
