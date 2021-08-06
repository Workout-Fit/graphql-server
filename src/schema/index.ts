import { gql } from 'apollo-server-express';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { GraphQLUpload } from 'graphql-upload';
import difficultySchema from './difficulty';
import equipmentSchema from './equipment';
import exerciseSchema from './exercise';
import exerciseTypeSchema from './exerciseType';
import languageSchema from './language';
import muscleGroupSchema from './muscleGroup';
import userSchema from './user';
import workoutSchema from './workout';

export default makeExecutableSchema({
  typeDefs: [
    gql`
      scalar Upload
    `,
    difficultySchema.typeDefs,
    equipmentSchema.typeDefs,
    exerciseSchema.typeDefs,
    exerciseTypeSchema.typeDefs,
    muscleGroupSchema.typeDefs,
    workoutSchema.typeDefs,
    userSchema.typeDefs,
    languageSchema.typeDefs,
  ],
  resolvers: [
    { Upload: GraphQLUpload },
    difficultySchema.resolvers,
    equipmentSchema.resolvers,
    exerciseSchema.resolvers,
    exerciseTypeSchema.resolvers,
    muscleGroupSchema.resolvers,
    workoutSchema.resolvers,
    userSchema.resolvers,
    languageSchema.resolvers,
  ],
});
