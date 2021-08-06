import { ObjectType, InputType, Field } from 'type-graphql';
import { GraphQLUpload, FileUpload } from 'graphql-upload';

@ObjectType()
export class ProfileInfo {
  @Field()
  username!: string;

  @Field()
  name!: string;

  @Field({ nullable: true })
  height?: number;

  @Field({ nullable: true })
  weight?: number;

  @Field({ nullable: true })
  bio?: string;

  @Field({ nullable: true })
  profilePicture?: string;
}

@ObjectType()
export class User {
  @Field()
  id!: string;

  @Field({ nullable: true })
  profileInfo?: ProfileInfo;
}

@InputType()
export class ProfileInfoInput {
  @Field()
  username!: string;

  @Field()
  name!: string;

  @Field({ nullable: true })
  height?: number;

  @Field({ nullable: true })
  weight?: number;

  @Field({ nullable: true })
  bio?: string;

  @Field(() => GraphQLUpload, { nullable: true })
  profilePicture?: FileUpload;
}
