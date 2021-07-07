import gql from 'graphql-tag';

export default gql`
  extend type Query {
    getWorkoutsByUserId(userId: String!): [Workout]
    getWorkoutById(id: String!): Workout
  }

  type Mutation {
    createWorkout(workout: WorkoutInput!): Workout
    copyWorkoutById(workoutId: String!, userId: String!): Workout
  }

  input WorkoutInput {
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