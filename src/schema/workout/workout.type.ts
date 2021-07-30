import { gql } from 'apollo-server';

export default gql`
  extend type Query {
    getWorkoutsByUserId(userId: String!): [Workout]
    getWorkoutById(id: String!): Workout
  }

  type Mutation {
    createWorkout(workout: WorkoutInput!): Workout
    updateWorkout(workout: WorkoutInput!): Workout
    copyWorkoutById(id: String!, userId: String!): Workout
    deleteWorkout(id: String!): Workout
  }

  input WorkoutInput {
    id: String
    userId: String!
    name: String!
    description: String
    basedOnId: String
    exercises: [ExercisesInput]
  }

  input ExercisesInput {
    exerciseId: String!
    sets: Int!
    rest: Int!
    repetitions: Int!
    notes: String
  }

  type Workout {
    id: String!
    userId: String!
    name: String!
    description: String
    basedOnId: String
    basedOn: Workout
    muscleGroups: [String]!
    user: User!
    exercises: [WorkoutExercise]
  }

  type WorkoutExercise {
    exerciseId: String!
    workoutId: String!
    sets: Int!
    rest: Int!
    repetitions: Int!
    notes: String
    exercise: Exercise
    workout: Workout
  }
`;
