import { makeExecutableSchema } from 'graphql-tools';

import difficultySchema from './difficulty';
import equipmentSchema from './equipment';
import exerciseSchema from './exercise';
import exerciseTypeSchema from './exerciseType';
import muscleGroupSchema from './muscleGroup';
import userSchema from './user';
import workoutSchema from './workout';

export default makeExecutableSchema({
  typeDefs: [
    difficultySchema.typeDefs,
    equipmentSchema.typeDefs,
    exerciseSchema.typeDefs,
    exerciseTypeSchema.typeDefs,
    muscleGroupSchema.typeDefs,
    workoutSchema.typeDefs,
    userSchema.typeDefs
  ],
  resolvers: [
    difficultySchema.resolvers,
    equipmentSchema.resolvers,
    exerciseSchema.resolvers,
    exerciseTypeSchema.resolvers,
    muscleGroupSchema.resolvers,
    workoutSchema.resolvers,
    userSchema.resolvers
  ],
});
