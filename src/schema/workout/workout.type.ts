import gql from 'graphql-tag';

export default gql`
  extend type Query {
    getWorkoutsByUserId(userId: ID!): [Workout]
    getWorkoutById(id: ID!): Workout
  }

  type Mutation {
    createWorkout(workout: WorkoutInput!): Workout
    copyWorkoutById(workoutId: ID!, userId: ID!): Workout
  }

  input WorkoutInput {
    userId: ID!
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
    id: ID!
    userId: ID!
    name: String!
    description: String
    basedOnId: String
    basedOn: Workout
    muscleGroups: [String]
    user: User
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